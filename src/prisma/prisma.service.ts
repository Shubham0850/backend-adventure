import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
	constructor(){
		super({
			datasources: {
				db: {
					url: "postgresql://postgres:newpassword123@localhost:5432/my_magic_db?schema=public"
				}
			}
		})
	}
}
