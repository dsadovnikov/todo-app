import React from 'react';
import { TaskStatusFilterType } from '../../types/Task';
import Button, { ButtonType } from '../ui/Button/Button';
import styles from './TaskFilter.module.scss';

interface TaskFilterProps {
  filter: string;
  setFilter: (value: string) => void;
  removeCompletedTasks: () => void;
}

const TaskFilter = ({
  filter,
  setFilter,
  removeCompletedTasks,
}: TaskFilterProps): JSX.Element => {
  const isRadioBtnSelected = (value: string): boolean => {
    return filter === value;
  };

  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFilter(e.currentTarget.value);
  };

  return (
    <div className={styles.filter} aria-label="add-task-filter">
      <div className={styles.controls}>
        <label className={styles.label} aria-label="filter-all">
          <input
            className={styles.input}
            type="radio"
            name="task-filter-status"
            value={TaskStatusFilterType.all}
            checked={isRadioBtnSelected(TaskStatusFilterType.all)}
            onChange={handleRadioClick}
          />
          All
        </label>
        <label className={styles.label} aria-label="filter-active">
          <input
            className={styles.input}
            type="radio"
            name="task-filter-status"
            value={TaskStatusFilterType.active}
            checked={isRadioBtnSelected(TaskStatusFilterType.active)}
            onChange={handleRadioClick}
          />
          Active
        </label>
        <label className={styles.label} aria-label="filter-completed">
          <input
            className={styles.input}
            type="radio"
            name="task-filter-status"
            value={TaskStatusFilterType.completed}
            checked={isRadioBtnSelected(TaskStatusFilterType.completed)}
            onChange={handleRadioClick}
          />
          Completed
        </label>
      </div>
      <Button
        type={ButtonType.button}
        onClick={(e) => removeCompletedTasks()}
        ariaLabel="remove-complete-task"
      >
        Clear completed
      </Button>
    </div>
  );
};

export default TaskFilter;
