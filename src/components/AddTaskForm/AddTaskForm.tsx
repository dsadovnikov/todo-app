import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { ITask } from '../../types/Task';
import Button, { ButtonType } from '../ui/Button/Button';
import Input from '../ui/Input/Input';
import styles from './AddTaskForm.module.scss';
import plus from '../../assets/icons/plus.svg';

interface AddTaskFormProps {
  addTask: (task: ITask) => void;
}

const AddTaskForm = ({ addTask }: AddTaskFormProps) => {
  const [title, setTitle] = useState<string>('');

  const onSubmit = (e: React.FormEvent): void => {
    if (title) {
      e.preventDefault();
      addTask({ id: nanoid(), title: title, isComplete: false });
      setTitle('');
    }
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Input
        value={title}
        onChange={(e: any) => setTitle(e.target.value)}
        placeholder={'What needs to be done?'}
      />
      <div className={styles.buttonContainer}>
        <Button type={ButtonType.button} onClick={onSubmit}>
          <img className={styles.icon} src={plus} width="20px" />
        </Button>
      </div>
    </form>
  );
};

export default AddTaskForm;
