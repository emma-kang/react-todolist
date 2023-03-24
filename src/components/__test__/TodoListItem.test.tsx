import React from 'react';
import { render } from "@testing-library/react";
import TodoListItem from "../TodoListItem";

const renderComponent = () => {
  render(
    <TodoListItem todos={{userId: 999, id: 999, task: 'testing list item', completed: false}} />
  )
}

describe('src/component/TodoListItem', () => {
  it('show correct todo list item', () => {
    renderComponent();

  });

  it('check completed task', () => {

  });

  it('update task', () => {

  });

  it('delete task', () => {

  });
})