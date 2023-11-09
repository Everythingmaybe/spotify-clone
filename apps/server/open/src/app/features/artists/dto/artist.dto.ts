import { ApiProperty } from '@nestjs/swagger';
import { ArtistTrackDto } from './artist-track.dto';

export class ArtistDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  avatar: string;
  @ApiProperty({ nullable: true })
  banner: string | null;
  @ApiProperty()
  color: string;
  @ApiProperty({ type: ArtistTrackDto, isArray: true })
  tracks: ArtistTrackDto[];
}
