import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DropdownMenuLabel } from '@/components/ui/dropdown-menu';

describe('DropdownMenuLabel Component', () => {
  it('renders DropdownMenuLabel component correctly', () => {
    render(<DropdownMenuLabel data-testid="dropdown-label">Test Label</DropdownMenuLabel>);

    const dropdownMenuLabel = screen.getByTestId('dropdown-label');
    expect(dropdownMenuLabel).toBeInTheDocument();

    expect(dropdownMenuLabel).toHaveClass('px-2 py-1.5 text-sm font-semibold');
  });

  it('renders DropdownMenuLabel component with inset correctly', () => {
    render(<DropdownMenuLabel inset data-testid="dropdown-label">Test Label</DropdownMenuLabel>);

    const dropdownMenuLabel = screen.getByTestId('dropdown-label');
    expect(dropdownMenuLabel).toBeInTheDocument();

    expect(dropdownMenuLabel).toHaveClass('px-2 py-1.5 text-sm font-semibold pl-8');
  });
});
