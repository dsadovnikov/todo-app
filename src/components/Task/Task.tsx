import React from 'react';
import { ITask } from '../../types/Task';
import Button, { ButtonType } from '../ui/Button/Button';
import styles from './Task.module.scss';
import check from '../../assets/icons/check.svg';

interface TaskProps {
  task: ITask;
  switchCompeteTask: (task: ITask) => void;
  removeTask: (task: ITask) => void;
}

const Task = ({
  task,
  switchCompeteTask,
  removeTask,
}: TaskProps): JSX.Element => {
  const rootClasses = [styles.task];

  if (task.isComplete) {
    rootClasses.push(styles.taskComplete);
  }

  return (
    <div
      className={rootClasses.join(' ')}
      onClick={(e) => switchCompeteTask(task)}
    >
      <div className={styles.mark}>
        <img className={styles.icon} src={check} width="15px" />
      </div>
      <p className={styles.title}>{task.title}</p>
      <Button
        type={ButtonType.button}
        onClick={(e) => {
          e.stopPropagation();
          removeTask(task);
        }}
      >
        X
      </Button>
    </div>
  );
};

export default Task;
