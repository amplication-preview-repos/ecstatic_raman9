import { JsonValue } from "type-fest";
import { CommandQueue } from "../commandQueue/CommandQueue";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  session: JsonValue;
  proxy: string | null;
  telegramId: number | null;
  userName: string | null;
  sessionData: JsonValue;
  proxyAddress: string | null;
  commandQueues?: Array<CommandQueue>;
  telegramUserId: number | null;
  telegramUserName: string | null;
};
