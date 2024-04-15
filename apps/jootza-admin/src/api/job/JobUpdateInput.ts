export type JobUpdateInput = {
  companyId?: string | null;
  description?: string | null;
  dueDate?: Date | null;
  employmentType?: "FullTime" | "PartTime" | "Contract" | "Temporary" | null;
  experienceLevel?: "EntryLevel" | "MidLevel" | "SeniorLevel" | null;
  hiringContact?: string | null;
  industry?: string | null;
  keywords?: string | null;
  location?: string | null;
  status?: "Open" | "Closed" | "OnHold" | null;
  title?: string | null;
};
