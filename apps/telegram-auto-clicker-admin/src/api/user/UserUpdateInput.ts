import { InputJsonValue } from "../../types";
import { CommandQueueUpdateManyWithoutUsersInput } from "./CommandQueueUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  session?: InputJsonValue;
  proxy?: string | null;
  telegramId?: number | null;
  userName?: string | null;
  sessionData?: InputJsonValue;
  proxyAddress?: string | null;
  commandQueues?: CommandQueueUpdateManyWithoutUsersInput;
  telegramUserId?: number | null;
  telegramUserName?: string | null;
};
