import { InputJsonValue } from "../../types";
import { CommandQueueUpdateManyWithoutGamesInput } from "./CommandQueueUpdateManyWithoutGamesInput";

export type GameUpdateInput = {
  name?: string | null;
  url?: string | null;
  commands?: InputJsonValue;
  commandQueues?: CommandQueueUpdateManyWithoutGamesInput;
};
