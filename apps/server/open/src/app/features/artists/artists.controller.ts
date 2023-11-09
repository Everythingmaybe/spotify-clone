import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { CreateArtistDto, CreateArtistFilesDto } from './dto/create-artist.dto';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ArtistDto } from './dto/artist.dto';
import { Public } from '../auth/auth.guard';
import { ArtistListItemDto } from './dto/artist-list-item.dto';

@ApiTags('Artists')
@ApiBearerAuth()
@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Get()
  @Public()
  @ApiOkResponse({ type: ArtistListItemDto, isArray: true })
  getArtistList(): Promise<ArtistListItemDto[]> {
    return this.artistsService.getArtistList();
  }
  @Get(':id')
  @Public()
  @ApiOkResponse({ type: ArtistDto })
  getArtistById(@Param('id') id: string): Promise<ArtistDto> {
    return this.artistsService.getArtistById(id);
  }

  @Post()
  @ApiCreatedResponse({ type: ArtistDto })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'avatar', maxCount: 1 },
      { name: 'banner', maxCount: 1 },
    ])
  )
  createArtist(
    @UploadedFiles() files: CreateArtistFilesDto,
    @Body() body: CreateArtistDto
  ): Promise<ArtistDto> {
    return this.artistsService.createArtist(body.name, files);
  }
}
