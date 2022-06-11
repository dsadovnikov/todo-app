import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

describe('Test TodoList page', () => {
  test('Page contains main elements', () => {
    render(<TodoList taskList={[]} />);
    const addTaskForm = screen.getByLabelText('add-task-form');
    const taskList = screen.getByLabelText('add-task-list');
    const taskFilterInputs = screen.getByLabelText('add-task-filter');
    expect(addTaskForm).toBeInTheDocument();
    expect(taskList).toBeInTheDocument();
    expect(taskFilterInputs).toBeInTheDocument();
  });

  test('Add task', () => {
    render(<TodoList taskList={[]} />);
    const addTaskForm = screen.getByLabelText('add-task-form');
    const addTaskFormInput = screen.getByLabelText('add-task-form-input');

    fireEvent.change(addTaskFormInput, { target: { value: 'Test task' } });
    fireEvent.submit(addTaskForm);

    const task = screen.getByLabelText('task');
    expect(task).toHaveTextContent('Test task');
  });

  test('Try to add empty task', () => {
    render(<TodoList taskList={[]} />);
    const addTaskForm = screen.getByLabelText('add-task-form');
    const addTaskFormInput = screen.getByLabelText('add-task-form-input');

    fireEvent.change(addTaskFormInput, { target: { value: '' } });
    fireEvent.submit(addTaskForm);

    expect(screen.queryByLabelText('task')).toBeNull();
  });

  test('Delete task', () => {
    render(<TodoList taskList={[]} />);
    const addTaskForm = screen.getByLabelText('add-task-form');
    const addTaskFormInput = screen.getByLabelText('add-task-form-input');

    fireEvent.change(addTaskFormInput, { target: { value: 'Test task' } });
    fireEvent.submit(addTaskForm);

    const taskDeleteButton = screen.getByLabelText('task-delete-button');
    fireEvent.click(taskDeleteButton);

    expect(screen.queryByLabelText('task')).toBeNull();
  });

  test('Delete only the required task', () => {
    render(<TodoList taskList={[]} />);
    const addTaskForm = screen.getByLabelText('add-task-form');
    const addTaskFormInput = screen.getByLabelText('add-task-form-input');

    fireEvent.change(addTaskFormInput, { target: { value: 'Test task 1' } });
    fireEvent.submit(addTaskForm);
    fireEvent.change(addTaskFormInput, { target: { value: 'Test task 2' } });
    fireEvent.submit(addTaskForm);
    fireEvent.change(addTaskFormInput, { target: { value: 'Test task 3' } });
    fireEvent.submit(addTaskForm);

    const taskDeleteButtons = screen.getAllByLabelText('task-delete-button');
    fireEvent.click(taskDeleteButtons[1]);

    const tasks = screen.getAllByLabelText('task');
    expect(tasks[0]).toHaveTextContent('Test task 1');
    expect(tasks[1]).toHaveTextContent('Test task 3');
    tasks.forEach((task) => {
      expect(task).not.toHaveTextContent('Test task 2');
    });
  });

  test('Filter check', () => {
    render(<TodoList taskList={[]} />);
    const addTaskForm = screen.getByLabelText('add-task-form');
    const addTaskFormInput = screen.getByLabelText('add-task-form-input');

    fireEvent.change(addTaskFormInput, { target: { value: 'Test task 1' } });
    fireEvent.submit(addTaskForm);
    fireEvent.change(addTaskFormInput, { target: { value: 'Test task 2' } });
    fireEvent.submit(addTaskForm);

    let tasks = screen.getAllByLabelText('task');
    fireEvent.click(tasks[1]);

    const filterAll = screen.getByLabelText('filter-all');
    const filterActive = screen.getByLabelText('filter-active');
    const filterCompleted = screen.getByLabelText('filter-completed');

    fireEvent.click(filterActive);
    tasks = screen.getAllByLabelText('task');
    tasks.forEach((task) => {
      expect(task).toHaveTextContent('Test task 1');
    });
    fireEvent.click(filterCompleted);
    tasks = screen.getAllByLabelText('task');
    tasks.forEach((task) => {
      expect(task).toHaveTextContent('Test task 2');
    });
    fireEvent.click(filterAll);
    tasks = screen.getAllByLabelText('task');
    expect(tasks[0]).toHaveTextContent('Test task 1');
    expect(tasks[1]).toHaveTextContent('Test task 2');
  });
});
