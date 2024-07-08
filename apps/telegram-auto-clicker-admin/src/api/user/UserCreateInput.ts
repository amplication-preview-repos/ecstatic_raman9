import { InputJsonValue } from "../../types";
import { CommandQueueCreateNestedManyWithoutUsersInput } from "./CommandQueueCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  session?: InputJsonValue;
  proxy?: string | null;
  telegramId?: number | null;
  userName?: string | null;
  sessionData?: InputJsonValue;
  proxyAddress?: string | null;
  commandQueues?: CommandQueueCreateNestedManyWithoutUsersInput;
  telegramUserId?: number | null;
  telegramUserName?: string | null;
};
