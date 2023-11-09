import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../shared/modules/database/database.service';

@Injectable()
export class ArtistsRepository {
  constructor(private readonly db: DatabaseService) {}

  getArtistList() {
    return this.db.artist.findMany({
      select: {
        id: true,
        name: true,
        avatar: true,
        color: true,
      },
    });
  }
  getArtistById(id: string) {
    return this.db.artist.findUnique({
      where: { id },
      include: {
        tracks: {
          select: {
            id: true,
            title: true,
            date: true,
            image: true,
            artists: true,
          },
        },
      },
    });
  }

  createArtist(data) {
    return this.db.artist.create({
      data,
      //Todo
      include: {
        tracks: {
          select: {
            id: true,
            title: true,
            date: true,
            image: true,
            artists: true,
          },
        },
      },
    });
  }
}
