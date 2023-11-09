import { Injectable, NotFoundException } from '@nestjs/common';
import { ArtistsRepository } from './artists.repository';
import { CreateArtistFilesDto } from './dto/create-artist.dto';
import { FilestoreService } from '../filestore/filestore.service';
import { ImagesService } from '../../shared/modules/images/images.service';
import { ArtistDto } from './dto/artist.dto';
import { ArtistListItemDto } from './dto/artist-list-item.dto';

@Injectable()
export class ArtistsService {
  constructor(
    private readonly artistsRepository: ArtistsRepository,
    private readonly filestore: FilestoreService,
    private readonly imagesService: ImagesService
  ) {}

  async getArtistList(): Promise<ArtistListItemDto[]> {
    return this.artistsRepository.getArtistList();
  }
  async getArtistById(id: string): Promise<ArtistDto> {
    const artist = await this.artistsRepository.getArtistById(id);
    if (!artist) throw new NotFoundException();
    return artist;
  }

  async createArtist(
    name: string,
    images: CreateArtistFilesDto
  ): Promise<ArtistDto> {
    const [avatar, banner, color] = await Promise.all([
      images.avatar?.[0] &&
        this.filestore.saveImage(images.avatar[0], {
          width: 640,
          height: 640,
        }),
      images.banner?.[0] &&
        this.filestore.saveImage(images.banner[0], {
          width: 2660,
          height: 1140,
        }),
      images.avatar?.[0]?.buffer &&
        this.imagesService.getColorFromImage(images.avatar?.[0]?.buffer),
    ]);
    return this.artistsRepository.createArtist({
      name,
      banner,
      avatar,
      color,
    });
  }
}
