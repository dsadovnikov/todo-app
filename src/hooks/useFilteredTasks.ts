import { useMemo } from 'react';
import { ITask, TaskStatusFilterType } from '../types/Task';

export const useFilteredTasks = (tasks: ITask[], filter: string) => {
  const filteredTasks = useMemo(() => {
    switch (filter) {
      case TaskStatusFilterType.all:
        return tasks;
      case TaskStatusFilterType.active:
        return tasks.filter((tasks) => tasks.isComplete === false);
      case TaskStatusFilterType.completed:
        return tasks.filter((tasks) => tasks.isComplete === true);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  return filteredTasks;
};
