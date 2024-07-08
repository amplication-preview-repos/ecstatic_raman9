import { InputJsonValue } from "../../types";
import { CommandQueueCreateNestedManyWithoutGamesInput } from "./CommandQueueCreateNestedManyWithoutGamesInput";

export type GameCreateInput = {
  name?: string | null;
  url?: string | null;
  commands?: InputJsonValue;
  commandQueues?: CommandQueueCreateNestedManyWithoutGamesInput;
};
