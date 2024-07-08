import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
  NumberInput,
  ReferenceArrayInput,
} from "react-admin";

import { CommandQueueTitle } from "../commandQueue/CommandQueueTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Username" source="username" />
        <TextInput label="Email" source="email" type="email" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <div />
        <TextInput label="proxy" source="proxy" />
        <NumberInput step={1} label="telegramId" source="telegramId" />
        <TextInput label="UserName" source="userName" />
        <div />
        <TextInput label="ProxyAddress" source="proxyAddress" />
        <ReferenceArrayInput
          source="commandQueues"
          reference="CommandQueue"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommandQueueTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="TelegramUserID" source="telegramUserId" />
        <TextInput label="TelegramUserName" source="telegramUserName" />
      </SimpleForm>
    </Edit>
  );
};
