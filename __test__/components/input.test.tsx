import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Input } from '@/components/ui/input';

describe('Input component', () => {
    it('renders input element with provided props', () => {
      render(<Input type="text" placeholder="Enter text" />);
      const inputElement = screen.getByRole('textbox');
      expect(inputElement).toBeInTheDocument();
      expect(inputElement).toHaveAttribute('type', 'text');
      expect(inputElement).toHaveAttribute('placeholder', 'Enter text');
    });
  
    it('applies additional class names when provided', () => {
      render(<Input className="custom-class" />);
      const inputElement = screen.getByRole('textbox');
      expect(inputElement).toHaveClass('custom-class');
    });
  
    it('forwards ref to the input element', () => {
      const ref = React.createRef<HTMLInputElement>();
      render(<Input ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });
});
