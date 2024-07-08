import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { CommandQueueListRelationFilter } from "../commandQueue/CommandQueueListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  session?: JsonFilter;
  proxy?: StringNullableFilter;
  telegramId?: IntNullableFilter;
  userName?: StringNullableFilter;
  sessionData?: JsonFilter;
  proxyAddress?: StringNullableFilter;
  commandQueues?: CommandQueueListRelationFilter;
  telegramUserId?: IntNullableFilter;
  telegramUserName?: StringNullableFilter;
};
