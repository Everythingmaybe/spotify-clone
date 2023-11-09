import { ApiProperty } from '@nestjs/swagger';

export class ArtistListItemDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  avatar: string;
  @ApiProperty()
  color: string;
}
