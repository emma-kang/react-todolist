import React from 'react';
import { fireEvent, render } from "@testing-library/react";
import CustomButton, { CustomButtonProps } from "../../common/CustomButton";

const renderComponent = (props: CustomButtonProps) => render(<CustomButton {...props} />);

describe('src/components/common/CustomButton', () => {
  let props: CustomButtonProps;
  beforeEach(() => {
    props = {
      variant: 'text',
      handleClick: jest.fn(),
      text: 'Custom Btn Test'
    }
  })
  it('should display correct text', () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId('custom-btn')).toHaveTextContent('Custom Btn Test');
  });

  it('should handleClick func called', () => {
    const { getByTestId } = renderComponent(props);
    fireEvent.click(getByTestId('custom-btn'));
    expect(props.handleClick).toHaveBeenCalled();

  })
});