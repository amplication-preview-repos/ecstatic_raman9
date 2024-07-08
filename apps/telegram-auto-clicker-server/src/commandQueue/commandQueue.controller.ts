import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CommandQueueService } from "./commandQueue.service";
import { CommandQueueControllerBase } from "./base/commandQueue.controller.base";

@swagger.ApiTags("commandQueues")
@common.Controller("commandQueues")
export class CommandQueueController extends CommandQueueControllerBase {
  constructor(protected readonly service: CommandQueueService) {
    super(service);
  }
}
