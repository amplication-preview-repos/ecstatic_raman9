import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CommandQueueServiceBase } from "./base/commandQueue.service.base";

@Injectable()
export class CommandQueueService extends CommandQueueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
