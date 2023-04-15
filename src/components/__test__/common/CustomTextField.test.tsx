import React from 'react';
import CustomTextField, { CustomTextFieldProps } from "../../common/CustomTextField";
import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const renderComponent = (props: CustomTextFieldProps) => render(<CustomTextField {...props} />)
describe('src/components/common/CustomTextField', () => {
  let props: CustomTextFieldProps;
  beforeEach(() => {
    props = {
      id: '1',
      variant: 'standard',
      label: 'test',
      handleChange: jest.fn(),
      handleKeyDown: jest.fn(),
      value: 'Custom Text Field Test'
    };
  })
  it('should render the component with correct label', () => {
    const { getByText } = renderComponent(props);
    expect(getByText('test')).toBeInTheDocument();
  });

  it('should call the onChange handler when input value changes', () => {
    const { getByTestId } = renderComponent(props);
    userEvent.type(getByTestId('custom-text-field'), 'TEST INPUT');
    expect(props.handleChange).toHaveBeenCalledTimes(9);
  })
})