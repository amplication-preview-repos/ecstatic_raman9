/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CommandQueueWhereUniqueInput } from "../../commandQueue/base/CommandQueueWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CommandQueueCreateNestedManyWithoutUsersInput {
  @Field(() => [CommandQueueWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CommandQueueWhereUniqueInput],
  })
  connect?: Array<CommandQueueWhereUniqueInput>;
}

export { CommandQueueCreateNestedManyWithoutUsersInput as CommandQueueCreateNestedManyWithoutUsersInput };
