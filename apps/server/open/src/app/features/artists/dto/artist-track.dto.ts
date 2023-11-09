import { ApiProperty } from '@nestjs/swagger';
import { TrackArtistDto } from '../../tracks/dto/track-artist.dto';

export class ArtistTrackDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty({ type: String })
  date: Date;

  @ApiProperty()
  image: string;

  @ApiProperty({ type: TrackArtistDto, isArray: true })
  artists: TrackArtistDto[];
}
