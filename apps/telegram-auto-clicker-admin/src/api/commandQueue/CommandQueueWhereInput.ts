import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";

export type CommandQueueWhereInput = {
  id?: StringFilter;
  command?: StringNullableFilter;
  executedAt?: DateTimeNullableFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
  game?: GameWhereUniqueInput;
};
