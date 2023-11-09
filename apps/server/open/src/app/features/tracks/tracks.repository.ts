import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../shared/modules/database/database.service';
import { CreateTrackRepositoryDto } from './dto/create-track-repository.dto';

@Injectable()
export class TracksRepository {
  constructor(private readonly db: DatabaseService) {}

  getTrack(id: string) {
    return this.db.track.findUnique({
      where: { id },
      include: {
        artists: {
          select: {
            id: true,
            name: true,
            avatar: true,
            banner: true,
          },
        },
      },
    });
  }

  createTrack(data: CreateTrackRepositoryDto) {
    return this.db.track.create({
      data: {
        ...data,
        artists: { connect: data.artistIds.map((id) => ({ id })) },
      },
      //Todo
      include: {
        artists: {
          select: {
            id: true,
            name: true,
            avatar: true,
            banner: true,
          },
        },
      },
    });
  }
}
