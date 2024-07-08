import { SortOrder } from "../../util/SortOrder";

export type CommandQueueOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  command?: SortOrder;
  executedAt?: SortOrder;
  status?: SortOrder;
  userId?: SortOrder;
  gameId?: SortOrder;
};
