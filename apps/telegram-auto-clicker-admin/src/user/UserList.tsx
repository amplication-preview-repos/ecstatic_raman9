import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Username" source="username" />
        <TextField label="Email" source="email" />
        <TextField label="Roles" source="roles" />
        <TextField label="session" source="session" />
        <TextField label="proxy" source="proxy" />
        <TextField label="telegramId" source="telegramId" />
        <TextField label="UserName" source="userName" />
        <TextField label="SessionData" source="sessionData" />
        <TextField label="ProxyAddress" source="proxyAddress" />
        <TextField label="TelegramUserID" source="telegramUserId" />
        <TextField label="TelegramUserName" source="telegramUserName" />
      </Datagrid>
    </List>
  );
};
