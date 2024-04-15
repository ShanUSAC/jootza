import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const JobShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="companyId" source="companyId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="dueDate" source="dueDate" />
        <TextField label="employmentType" source="employmentType" />
        <TextField label="experienceLevel" source="experienceLevel" />
        <TextField label="hiringContact" source="hiringContact" />
        <TextField label="ID" source="id" />
        <TextField label="industry" source="industry" />
        <TextField label="keywords" source="keywords" />
        <TextField label="location" source="location" />
        <TextField label="status" source="status" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
