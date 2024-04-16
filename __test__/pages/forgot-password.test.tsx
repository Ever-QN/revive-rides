import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ForgotPassword from '@/app/forgot-password/page';

describe('ForgotPassword component', () => {
  beforeAll(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test('renders properly', () => {
    render(<ForgotPassword />);
    
    expect(screen.getByText('Forgot Password')).toBeInTheDocument();
    expect(screen.getByText('Enter your email below to reset your password')).toBeInTheDocument();

    const emailInput = screen.getByPlaceholderText('m@example.com') as HTMLInputElement;
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('type', 'email');

    const resetButton = screen.getByText('Reset Password');
    expect(resetButton).toBeInTheDocument();

    const cancelButton = screen.getByText('Cancel');
    expect(cancelButton).toBeInTheDocument();
  });

  test('input field accepts user input', () => {
    render(<ForgotPassword />);

    const emailInput = screen.getByPlaceholderText('m@example.com') as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    expect(emailInput.value).toBe('test@example.com');
  });
});
