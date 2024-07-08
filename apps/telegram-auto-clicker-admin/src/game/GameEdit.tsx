import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CommandQueueTitle } from "../commandQueue/CommandQueueTitle";

export const GameEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
