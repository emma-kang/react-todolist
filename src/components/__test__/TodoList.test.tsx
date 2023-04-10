import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';
import userEvent from "@testing-library/user-event";
const renderComponent = () => {
  render (
    <TodoList />
  )
};

describe('src/component/TodoList', () => {
  it('has task list', () => {
    renderComponent();
    expect(screen.getByRole('li')).toHaveLength(4); // will be updated after adding API
  });

  it('has text to indicate no task', () => {
    const noTask = 'No Tasks';
    renderComponent();
    expect(screen.getByTitle(noTask)).toBeTruthy();
  });

  it('not have input text after click add button', () => {
    const tempTask = 'Write Test Code';
    renderComponent();
    userEvent.type(screen.getByRole('textbox'), tempTask);
    fireEvent.click(screen.getByRole('button', { name: /add/i }));
    expect(screen.getByRole('textbox')).toHaveTextContent('');
  })
});