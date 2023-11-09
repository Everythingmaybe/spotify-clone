import { Injectable } from '@nestjs/common';
import sharp, { AvailableFormatInfo, FormatEnum } from 'sharp';

@Injectable()
export class ImagesService {
  async getColorFromImage(image: Buffer): Promise<string> {
    const meta = await sharp(image).metadata();
    const extractedImage = await sharp(image)
      .extract({ left: 0, top: 0, width: 1, height: meta.height })
      .toBuffer();

    return sharp(extractedImage)
      .stats()
      .then(({ dominant }) => `rgb(${dominant.r},${dominant.g},${dominant.b})`);
  }

  processImage(
    image: Buffer,
    format: keyof FormatEnum | AvailableFormatInfo = 'webp',
    params?: { width?: number; height?: number }
  ) {
    return sharp(image).toFormat(format).resize(params).toBuffer();
  }
}
