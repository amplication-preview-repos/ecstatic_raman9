import { SortOrder } from "../../util/SortOrder";

export type GameOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  url?: SortOrder;
  commands?: SortOrder;
};
