import { ApiProperty } from '@nestjs/swagger';

export class TrackArtistDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty({ nullable: true })
  avatar: string | null;
  @ApiProperty({ nullable: true })
  banner: string | null;
  constructor(partial: Partial<TrackArtistDto>) {
    Object.assign(this, partial);
  }
}
