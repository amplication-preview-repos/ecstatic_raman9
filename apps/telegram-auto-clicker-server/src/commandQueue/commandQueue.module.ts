import { Module } from "@nestjs/common";
import { CommandQueueModuleBase } from "./base/commandQueue.module.base";
import { CommandQueueService } from "./commandQueue.service";
import { CommandQueueController } from "./commandQueue.controller";
import { CommandQueueResolver } from "./commandQueue.resolver";

@Module({
  imports: [CommandQueueModuleBase],
  controllers: [CommandQueueController],
  providers: [CommandQueueService, CommandQueueResolver],
  exports: [CommandQueueService],
})
export class CommandQueueModule {}
