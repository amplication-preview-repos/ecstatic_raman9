import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { GAME_TITLE_FIELD } from "../game/GameTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="CommandQueue"
          target="userId"
          label="CommandQueues"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Command" source="command" />
            <TextField label="ExecutedAt" source="executedAt" />
            <TextField label="Status" source="status" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Game" source="game.id" reference="Game">
              <TextField source={GAME_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
