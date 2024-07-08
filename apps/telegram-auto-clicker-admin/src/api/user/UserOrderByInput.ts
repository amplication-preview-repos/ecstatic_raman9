import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  username?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  session?: SortOrder;
  proxy?: SortOrder;
  telegramId?: SortOrder;
  userName?: SortOrder;
  sessionData?: SortOrder;
  proxyAddress?: SortOrder;
  telegramUserId?: SortOrder;
  telegramUserName?: SortOrder;
};
