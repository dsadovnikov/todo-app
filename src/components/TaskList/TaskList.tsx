import React from 'react';
import { ITask } from '../../types/Task';
import Task from '../Task/Task';
import { nanoid } from 'nanoid';
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
    <div className={styles.list}>
      {list.map((task) => (
        <Task
          key={nanoid()}
          task={task}
          switchCompeteTask={switchCompeteTask}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
