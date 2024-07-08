import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";

export type CommandQueueCreateInput = {
  command?: string | null;
  executedAt?: Date | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
  game?: GameWhereUniqueInput | null;
};
