import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { CreateTrackDto, CreateTrackFilesDto } from './dto/create-track.dto';
import { TracksService } from './tracks.service';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TrackDto } from './dto/track.dto';
import { Public } from '../auth/auth.guard';

@ApiTags('Tracks')
@ApiBearerAuth()
@Controller('tracks')
export class TracksController {
  constructor(private readonly tracksService: TracksService) {}

  @Get(':id')
  @ApiOkResponse({ type: TrackDto })
  @Public()
  getTrack(@Param('id') id: string): Promise<TrackDto> {
    return this.tracksService.getTrack(id);
  }
  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'file', maxCount: 1 },
      { name: 'image', maxCount: 1 },
    ])
  )
  createTrack(
    @UploadedFiles() files: CreateTrackFilesDto,
    @Body() body: CreateTrackDto
  ): Promise<TrackDto> {
    return this.tracksService.createTrack(body, files);
  }
}
