/* tslint:disable */
/* eslint-disable */
import { TrackArtistDto } from '../models/track-artist-dto';
export interface TrackDto {
  artists: Array<TrackArtistDto>;
  color?: string;
  date: string;
  file: string;
  id: string;
  image?: string;
  title: string;
}
