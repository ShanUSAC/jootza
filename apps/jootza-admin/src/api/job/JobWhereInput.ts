import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BigIntFilter } from "../../util/BigIntFilter";

export type JobWhereInput = {
  companyId?: StringNullableFilter;
  description?: StringNullableFilter;
  dueDate?: DateTimeNullableFilter;
  employmentType?: "FullTime" | "PartTime" | "Contract" | "Temporary";
  experienceLevel?: "EntryLevel" | "MidLevel" | "SeniorLevel";
  hiringContact?: StringNullableFilter;
  id?: BigIntFilter;
  industry?: StringNullableFilter;
  keywords?: StringNullableFilter;
  location?: StringNullableFilter;
  status?: "Open" | "Closed" | "OnHold";
  title?: StringNullableFilter;
};
