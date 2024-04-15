export type Job = {
  companyId: string | null;
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  employmentType?: "FullTime" | "PartTime" | "Contract" | "Temporary" | null;
  experienceLevel?: "EntryLevel" | "MidLevel" | "SeniorLevel" | null;
  hiringContact: string | null;
  id: bigint;
  industry: string | null;
  keywords: string | null;
  location: string | null;
  status?: "Open" | "Closed" | "OnHold" | null;
  title: string | null;
  updatedAt: Date;
};
