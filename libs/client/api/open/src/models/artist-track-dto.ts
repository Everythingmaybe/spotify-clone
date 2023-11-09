/* tslint:disable */
/* eslint-disable */
import { TrackArtistDto } from '../models/track-artist-dto';
export interface ArtistTrackDto {
  artists: Array<TrackArtistDto>;
  date: string;
  id: string;
  image: string;
  title: string;
}
