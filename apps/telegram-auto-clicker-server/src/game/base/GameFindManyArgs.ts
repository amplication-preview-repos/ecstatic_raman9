/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GameWhereInput } from "./GameWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { GameOrderByInput } from "./GameOrderByInput";

@ArgsType()
class GameFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => GameWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => GameWhereInput, { nullable: true })
  @Type(() => GameWhereInput)
  where?: GameWhereInput;

  @ApiProperty({
    required: false,
    type: [GameOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [GameOrderByInput], { nullable: true })
  @Type(() => GameOrderByInput)
  orderBy?: Array<GameOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { GameFindManyArgs as GameFindManyArgs };