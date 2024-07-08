import { CommandQueueWhereInput } from "./CommandQueueWhereInput";
import { CommandQueueOrderByInput } from "./CommandQueueOrderByInput";

export type CommandQueueFindManyArgs = {
  where?: CommandQueueWhereInput;
  orderBy?: Array<CommandQueueOrderByInput>;
  skip?: number;
  take?: number;
};
