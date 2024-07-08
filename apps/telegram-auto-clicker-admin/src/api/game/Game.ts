import { JsonValue } from "type-fest";
import { CommandQueue } from "../commandQueue/CommandQueue";

export type Game = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  url: string | null;
  commands: JsonValue;
  commandQueues?: Array<CommandQueue>;
};
