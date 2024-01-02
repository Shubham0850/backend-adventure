import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { MagicService } from './magic.service';
import { MagicItem } from '@prisma/client';

@Controller('magic')
export class MagicController {
  constructor(private magicService: MagicService) { }

  @Get()
  async getAllMagicItems(): Promise<MagicItem[]> {
    return this.magicService.getAllMagicItems();
  }

  @Post()
  async createMagicItem(@Body() magicItemData: { name: string; power: number }): Promise<MagicItem> {
    return this.magicService.createMagicItem(magicItemData.name, magicItemData.power);
  }

  @Put(':id')
  async updateMagicItem(@Param('id') id: number, @Body() magicItemData: { name: string; power: number }): Promise<MagicItem> {
    return this.magicService.updateMagicItem(id, magicItemData.name, magicItemData.power);
  }

  @Delete(':id')
  async deleteMagicItem(@Param('id') id: number): Promise<MagicItem> {
    return this.magicService.deleteMagicItem(id);
  }
}
