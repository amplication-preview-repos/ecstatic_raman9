import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CommandQueueTitle } from "../commandQueue/CommandQueueTitle";

export const GameCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="url" source="url" />
        <div />
        <ReferenceArrayInput
          source="commandQueues"
          reference="CommandQueue"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommandQueueTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
