/* tslint:disable */
/* eslint-disable */
import { ArtistTrackDto } from '../models/artist-track-dto';
export interface ArtistDto {
  avatar: string;
  banner: null | string;
  color: string;
  id: string;
  name: string;
  tracks: Array<ArtistTrackDto>;
}
