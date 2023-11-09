import { CreateTrackDto } from './create-track.dto';

export class CreateTrackRepositoryDto extends CreateTrackDto {
  file: string;
  image: string;
  color: string;
}
