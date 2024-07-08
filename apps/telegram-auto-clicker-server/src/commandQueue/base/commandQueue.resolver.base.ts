/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CommandQueue } from "./CommandQueue";
import { CommandQueueCountArgs } from "./CommandQueueCountArgs";
import { CommandQueueFindManyArgs } from "./CommandQueueFindManyArgs";
import { CommandQueueFindUniqueArgs } from "./CommandQueueFindUniqueArgs";
import { CreateCommandQueueArgs } from "./CreateCommandQueueArgs";
import { UpdateCommandQueueArgs } from "./UpdateCommandQueueArgs";
import { DeleteCommandQueueArgs } from "./DeleteCommandQueueArgs";
import { User } from "../../user/base/User";
import { Game } from "../../game/base/Game";
import { CommandQueueService } from "../commandQueue.service";
@graphql.Resolver(() => CommandQueue)
export class CommandQueueResolverBase {
  constructor(protected readonly service: CommandQueueService) {}

  async _commandQueuesMeta(
    @graphql.Args() args: CommandQueueCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CommandQueue])
  async commandQueues(
    @graphql.Args() args: CommandQueueFindManyArgs
  ): Promise<CommandQueue[]> {
    return this.service.commandQueues(args);
  }

  @graphql.Query(() => CommandQueue, { nullable: true })
  async commandQueue(
    @graphql.Args() args: CommandQueueFindUniqueArgs
  ): Promise<CommandQueue | null> {
    const result = await this.service.commandQueue(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CommandQueue)
  async createCommandQueue(
    @graphql.Args() args: CreateCommandQueueArgs
  ): Promise<CommandQueue> {
    return await this.service.createCommandQueue({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,

        game: args.data.game
          ? {
              connect: args.data.game,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => CommandQueue)
  async updateCommandQueue(
    @graphql.Args() args: UpdateCommandQueueArgs
  ): Promise<CommandQueue | null> {
    try {
      return await this.service.updateCommandQueue({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,

          game: args.data.game
            ? {
                connect: args.data.game,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => CommandQueue)
  async deleteCommandQueue(
    @graphql.Args() args: DeleteCommandQueueArgs
  ): Promise<CommandQueue | null> {
    try {
      return await this.service.deleteCommandQueue(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: CommandQueue): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Game, {
    nullable: true,
    name: "game",
  })
  async getGame(@graphql.Parent() parent: CommandQueue): Promise<Game | null> {
    const result = await this.service.getGame(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
