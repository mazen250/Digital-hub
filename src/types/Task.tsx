interface task {
  id: number;
  title: string;
  description: string;
  status: string;
  createdAt: Date;
  statusText: "Not Started" | "In Progress" | "Completed";
}

interface taskColors {
  NotStarted: string;
  InProgress: string;
  Completed: string;
}

export type { task, taskColors };
