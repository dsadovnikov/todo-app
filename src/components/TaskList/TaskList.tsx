import React from 'react';
import { ITask } from '../../types/Task';
import Task from '../Task/Task';
import styles from './TaskList.module.scss';

interface TaskListProps {
  list: ITask[];
  switchCompeteTask: (task: ITask) => void;
  removeTask: (task: ITask) => void;
}

const TaskList = ({
  list,
  switchCompeteTask,
  removeTask,
}: TaskListProps): JSX.Element => {
  return (
    <ul className={styles.list} aria-label="add-task-list">
      {list.map((task) => (
        <Task
          key={Math.random().toString(16).slice(2)}
          task={task}
          switchCompeteTask={switchCompeteTask}
          removeTask={removeTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
