/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsDate, IsEnum, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { EnumJobEmploymentType } from "./EnumJobEmploymentType";
import { EnumJobExperienceLevel } from "./EnumJobExperienceLevel";
import { EnumJobStatus } from "./EnumJobStatus";

@ObjectType()
class Job {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  companyId!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description!: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dueDate!: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumJobEmploymentType,
  })
  @IsEnum(EnumJobEmploymentType)
  @IsOptional()
  @Field(() => EnumJobEmploymentType, {
    nullable: true,
  })
  employmentType?: "FullTime" | "PartTime" | "Contract" | "Temporary" | null;

  @ApiProperty({
    required: false,
    enum: EnumJobExperienceLevel,
  })
  @IsEnum(EnumJobExperienceLevel)
  @IsOptional()
  @Field(() => EnumJobExperienceLevel, {
    nullable: true,
  })
  experienceLevel?: "EntryLevel" | "MidLevel" | "SeniorLevel" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  hiringContact!: string | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => GraphQLBigInt)
  id!: bigint;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  industry!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  keywords!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location!: string | null;

  @ApiProperty({
    required: false,
    enum: EnumJobStatus,
  })
  @IsEnum(EnumJobStatus)
  @IsOptional()
  @Field(() => EnumJobStatus, {
    nullable: true,
  })
  status?: "Open" | "Closed" | "OnHold" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Job as Job };
