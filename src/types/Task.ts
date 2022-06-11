export enum TaskStatusFilterType {
  all = 'all',
  active = 'active',
  completed = 'completed',
}

export interface ITask {
  id: string;
  title: string;
  isComplete: boolean;
}
