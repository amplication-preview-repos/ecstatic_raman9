import { CommandQueueWhereUniqueInput } from "./CommandQueueWhereUniqueInput";
import { CommandQueueUpdateInput } from "./CommandQueueUpdateInput";

export type UpdateCommandQueueArgs = {
  where: CommandQueueWhereUniqueInput;
  data: CommandQueueUpdateInput;
};
