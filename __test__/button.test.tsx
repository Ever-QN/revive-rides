import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '@/components/ui/button';

describe('Button', () => {
  it('renders button with default variant and size', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: 'Click me' });

    expect(button).toHaveClass('bg-primary');
    expect(button).toHaveClass('text-primary-foreground');
    expect(button).toHaveClass('h-10');
    expect(button).toHaveClass('px-4');
    expect(button).toHaveClass('py-2');
  });

  it('renders button with specified variant and size', () => {
    render(
      <Button variant="secondary" size="lg">
        Large Secondary Button
      </Button>
    );
    const button = screen.getByRole('button', { name: 'Large Secondary Button' });

    expect(button).toHaveClass('bg-secondary');
    expect(button).toHaveClass('text-secondary-foreground');
    expect(button).toHaveClass('h-11');
    expect(button).toHaveClass('px-8');
  });

  it('renders button as child component', () => {
    render(
      <Button asChild>
        <div>Custom Child</div>
      </Button>
    );
    const customChild = screen.getByText('Custom Child');

    expect(customChild).toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Ref Button</Button>);

    expect(ref.current).toBeInTheDocument();
  });
});
