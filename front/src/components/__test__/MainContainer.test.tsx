import React from 'react';
import { render } from '@testing-library/react';
import MainContainer from '../MainContainer';

const renderComponent = () => (
  render(
    <MainContainer />
  )
);

describe('src/components/MainContainer', () => {
  it('Should exist title', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('page-title')).toHaveTextContent('To Do List');
  })
})