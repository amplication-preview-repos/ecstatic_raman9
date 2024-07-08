import * as graphql from "@nestjs/graphql";
import { CommandQueueResolverBase } from "./base/commandQueue.resolver.base";
import { CommandQueue } from "./base/CommandQueue";
import { CommandQueueService } from "./commandQueue.service";

@graphql.Resolver(() => CommandQueue)
export class CommandQueueResolver extends CommandQueueResolverBase {
  constructor(protected readonly service: CommandQueueService) {
    super(service);
  }
}
