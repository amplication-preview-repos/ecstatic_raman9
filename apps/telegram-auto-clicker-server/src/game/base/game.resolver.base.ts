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
import { Game } from "./Game";
import { GameCountArgs } from "./GameCountArgs";
import { GameFindManyArgs } from "./GameFindManyArgs";
import { GameFindUniqueArgs } from "./GameFindUniqueArgs";
import { CreateGameArgs } from "./CreateGameArgs";
import { UpdateGameArgs } from "./UpdateGameArgs";
import { DeleteGameArgs } from "./DeleteGameArgs";
import { CommandQueueFindManyArgs } from "../../commandQueue/base/CommandQueueFindManyArgs";
import { CommandQueue } from "../../commandQueue/base/CommandQueue";
import { GameService } from "../game.service";
@graphql.Resolver(() => Game)
export class GameResolverBase {
  constructor(protected readonly service: GameService) {}

  async _gamesMeta(
    @graphql.Args() args: GameCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Game])
  async games(@graphql.Args() args: GameFindManyArgs): Promise<Game[]> {
    return this.service.games(args);
  }

  @graphql.Query(() => Game, { nullable: true })
  async game(@graphql.Args() args: GameFindUniqueArgs): Promise<Game | null> {
    const result = await this.service.game(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Game)
  async createGame(@graphql.Args() args: CreateGameArgs): Promise<Game> {
    return await this.service.createGame({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Game)
  async updateGame(@graphql.Args() args: UpdateGameArgs): Promise<Game | null> {
    try {
      return await this.service.updateGame({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Game)
  async deleteGame(@graphql.Args() args: DeleteGameArgs): Promise<Game | null> {
    try {
      return await this.service.deleteGame(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [CommandQueue], { name: "commandQueues" })
  async findCommandQueues(
    @graphql.Parent() parent: Game,
    @graphql.Args() args: CommandQueueFindManyArgs
  ): Promise<CommandQueue[]> {
    const results = await this.service.findCommandQueues(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}