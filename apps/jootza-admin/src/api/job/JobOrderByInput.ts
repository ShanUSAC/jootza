import { SortOrder } from "../../util/SortOrder";

export type JobOrderByInput = {
  companyId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  dueDate?: SortOrder;
  employmentType?: SortOrder;
  experienceLevel?: SortOrder;
  hiringContact?: SortOrder;
  id?: SortOrder;
  industry?: SortOrder;
  keywords?: SortOrder;
  location?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
