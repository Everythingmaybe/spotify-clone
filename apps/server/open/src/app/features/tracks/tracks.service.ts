import { Injectable, NotFoundException } from '@nestjs/common';
import { TracksRepository } from './tracks.repository';
import { CreateTrackDto, CreateTrackFilesDto } from './dto/create-track.dto';
import { FilestoreService } from '../filestore/filestore.service';
import { ImagesService } from '../../shared/modules/images/images.service';
import { TrackDto } from './dto/track.dto';

@Injectable()
export class TracksService {
  constructor(
    private readonly tracksRepository: TracksRepository,
    private readonly filestore: FilestoreService,
    private readonly imagesService: ImagesService
  ) {}
  async getTrack(id: string): Promise<TrackDto> {
    const track = await this.tracksRepository.getTrack(id);
    if (!track) throw new NotFoundException();
    return track;
  }

  async createTrack(
    data: CreateTrackDto,
    files: CreateTrackFilesDto
  ): Promise<TrackDto> {
    const [file, image, color] = await Promise.all([
      this.filestore.saveAudio(files.file[0]),
      files.image &&
        this.filestore.saveImage(files.image[0], {
          width: 640,
          height: 640,
        }),
      files.image &&
        this.imagesService.getColorFromImage(files.image[0].buffer),
    ]);
    return this.tracksRepository.createTrack({ ...data, file, image, color });
  }
}
