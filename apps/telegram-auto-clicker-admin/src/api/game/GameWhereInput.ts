import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { CommandQueueListRelationFilter } from "../commandQueue/CommandQueueListRelationFilter";

export type GameWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  url?: StringNullableFilter;
  commands?: JsonFilter;
  commandQueues?: CommandQueueListRelationFilter;
};
