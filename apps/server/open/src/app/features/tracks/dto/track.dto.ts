import { ApiProperty } from '@nestjs/swagger';
import { TrackArtistDto } from './track-artist.dto';

export class TrackDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  title: string;
  @ApiProperty()
  file: string;
  @ApiProperty({ type: String })
  date: Date;
  @ApiProperty({ required: false })
  image: string | null;
  @ApiProperty({ required: false })
  color: string | null;
  @ApiProperty({ type: TrackArtistDto, isArray: true })
  artists: TrackArtistDto[];

  constructor(partial: Partial<TrackDto>) {
    Object.assign(this, partial);
  }
}
