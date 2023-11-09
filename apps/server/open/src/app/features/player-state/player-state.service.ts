import { Injectable } from '@nestjs/common';
import { BehaviorSubject, finalize, map, Observable } from 'rxjs';
import { TracksService } from '../tracks/tracks.service';
import { TrackDto } from '../tracks/dto/track.dto';

export interface PlayerState {
  track?: TrackDto;
  isPlaying: boolean;
  currentTime: number;
  isRepeating: boolean;
  volume: number;
  activeDeviceId?: string | null;
  currentDevice: Device;
  devices: Device[];
}

export interface Device {
  id: string;
  name: string;
}

export interface PlayerStateAction {
  type: PlayerStateActionType;
  payload?: any;
}

export enum PlayerStateActionType {
  Resume = 'Resume',
  Pause = 'Pause',
  PlayTrack = 'PlayTrack',
  RepeatTrack = 'RepeatTrack',
  Volume = 'Volume',
  Repeat = 'Repeat',
  Time = 'Time',
  AddDevice = 'AddDevice',
  RemoveDevice = 'RemoveDevice',
  SetActiveDevice = 'SetActiveDevice',
}

@Injectable()
export class PlayerStateService {
  private readonly playerStates: Map<string, BehaviorSubject<PlayerState>> =
    new Map();

  private reducers: Record<
    PlayerStateActionType,
    (state: PlayerState, payload: any) => Promise<PlayerState>
  > = {
    [PlayerStateActionType.Resume]: async (state) => ({
      ...state,
      isPlaying: true,
    }),

    [PlayerStateActionType.Pause]: async (state) => ({
      ...state,
      isPlaying: false,
    }),

    [PlayerStateActionType.PlayTrack]: async (state, payload) => {
      const track = await this.tracksService.getTrack(payload);
      return {
        ...state,
        isPlaying: true,
        currentTime: 0,
        track: track,
      };
    },

    [PlayerStateActionType.RepeatTrack]: async (state, payload) => ({
      ...state,
      isPlaying: true,
      currentTime: 0,
    }),

    [PlayerStateActionType.Volume]: async (state, payload) => ({
      ...state,
      volume: payload,
    }),

    [PlayerStateActionType.Repeat]: async (state, payload) => ({
      ...state,
      isRepeating: !state.isRepeating,
    }),

    [PlayerStateActionType.Time]: async (state, payload) => ({
      ...state,
      currentTime: payload,
    }),

    [PlayerStateActionType.AddDevice]: async (state, payload) => {
      const newState = {
        ...state,
        devices: [...state.devices, payload],
      };
      newState.activeDeviceId ??= payload.id;
      return newState;
    },

    [PlayerStateActionType.RemoveDevice]: async (state, payload) => {
      const newState = {
        ...state,
        devices: state.devices.filter(({ id }) => payload !== id),
      };
      if (payload === newState.activeDeviceId) {
        newState.isPlaying = false;
        newState.activeDeviceId = newState.devices[0]?.id || null;
      }
      return newState;
    },

    [PlayerStateActionType.SetActiveDevice]: async (state, payload) => ({
      ...state,
      activeDeviceId: payload,
    }),
  };

  constructor(private readonly tracksService: TracksService) {}

  createPlayerState(userId: string, device: Device) {
    this.playerStates.set(
      userId,
      new BehaviorSubject<PlayerState>({
        track: null,
        isPlaying: false,
        currentTime: 0,
        isRepeating: false,
        volume: 100,
        devices: [],
        activeDeviceId: null,
        currentDevice: device,
      })
    );
  }

  getPlayerState(userId: string, deviceName: string) {
    const device: Device = { id: Date.now().toString(), name: deviceName };
    if (!this.playerStates.has(userId)) {
      this.createPlayerState(userId, device);
    }
    this.action(userId, {
      type: PlayerStateActionType.AddDevice,
      payload: device,
    });
    return this.playerStates
      .get(userId)
      .asObservable()
      .pipe(
        map((s) => {
          s.currentDevice = device;
          return s;
        }),
        finalize(() => {
          this.action(userId, {
            type: PlayerStateActionType.RemoveDevice,
            payload: device.id,
          });
        })
      );
  }

  async action(userId: string, actionCreator: PlayerStateAction) {
    const userState = this.playerStates.get(userId);
    userState.next(
      await this.reducers[actionCreator.type](
        userState.value,
        actionCreator.payload
      )
    );
  }
}
