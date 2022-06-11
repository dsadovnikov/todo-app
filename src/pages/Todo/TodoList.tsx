import React, { useState } from 'react';
import AddTaskForm from '../../components/AddTaskForm/AddTaskForm';
import TaskFilter from '../../components/TaskFilter/TaskFilter';
import TaskList from '../../components/TaskList/TaskList';
import { useFilteredTasks } from '../../hooks/useFilteredTasks';
import { ITask, TaskStatusFilterType } from '../../types/Task';
import { defaultTaskList } from '../../utils/defaultTaskList';
import styles from './TodoList.module.scss';

const TodoList = () => {
  const [tasks, setTasks] = useState<ITask[]>(defaultTaskList);
  const [filter, setFilter] = useState<string>(TaskStatusFilterType.all);
  const filteredTasks = useFilteredTasks(tasks, filter);

  const addTask = (task: ITask): void => {
    const newList = [...tasks, task];
    setTasks(newList);
  };

  const switchCompleteTask = (task: ITask): void => {
    const completedTaskIndex = tasks.findIndex((item) => item.id === task.id);
    const updatedTasks = [...tasks];
    updatedTasks.splice(completedTaskIndex, 1, {
      id: task.id,
      title: task.title,
      isComplete: !task.isComplete,
    });
    setTasks(updatedTasks);
  };

  const removeTask = (task: ITask): void => {
    setTasks(tasks.filter((item) => item.id !== task.id));
  };

  const removeCompletedTasks = () => {
    setTasks(tasks.filter((item) => item.isComplete !== true));
  };

  return (
    <div className={styles.background}>
      <h1>TODOS</h1>
      <div className={styles.todo}>
        <AddTaskForm addTask={addTask} />
        <TaskList
          list={filteredTasks}
          switchCompeteTask={switchCompleteTask}
          removeTask={removeTask}
        />
        <TaskFilter
          filter={filter}
          setFilter={setFilter}
          removeCompletedTasks={removeCompletedTasks}
        />
      </div>
    </div>
  );
};

export default TodoList;
