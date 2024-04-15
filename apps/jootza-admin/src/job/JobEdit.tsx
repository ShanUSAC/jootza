import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  SelectInput,
} from "react-admin";

export const JobEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="companyId" source="companyId" />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="dueDate" source="dueDate" />
        <SelectInput
          source="employmentType"
          label="employmentType"
          choices={[
            { label: "Full-Time", value: "FullTime" },
            { label: "Part-Time", value: "PartTime" },
            { label: "Contract", value: "Contract" },
            { label: "Temporary", value: "Temporary" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="experienceLevel"
          label="experienceLevel"
          choices={[
            { label: "Entry Level", value: "EntryLevel" },
            { label: "Mid Level", value: "MidLevel" },
            { label: "Senior Level", value: "SeniorLevel" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="hiringContact" source="hiringContact" />
        <TextInput label="industry" source="industry" />
        <TextInput label="keywords" source="keywords" />
        <TextInput label="location" source="location" />
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "Open", value: "Open" },
            { label: "Closed", value: "Closed" },
            { label: "On Hold", value: "OnHold" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
