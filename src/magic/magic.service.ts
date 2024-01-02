
import { Injectable } from '@nestjs/common';
import { MagicItem, PrismaClient } from '@prisma/client';

@Injectable()
export class MagicService {
	private prisma: PrismaClient;

	constructor() {
		this.prisma = new PrismaClient();
	}

	async createMagicItem(name: string, power: number): Promise<MagicItem> {
		return this.prisma.magicItem.create({
			data: {
				name,
				power,
			},
		});
	}

	async getAllMagicItems(): Promise<MagicItem[]> {
		return this.prisma.magicItem.findMany();
	}


	async updateMagicItem(id: number, name: string, power: number): Promise<MagicItem> {
		return this.prisma.magicItem.update({
			where: { id },
			data: { name, power },
		});
	}


	async deleteMagicItem(id: number): Promise<MagicItem> {
		return this.prisma.magicItem.delete({
			where: { id },
		});
	}

}
