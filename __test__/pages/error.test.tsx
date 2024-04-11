import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorPage from '@/app/error/page';

describe('ErrorPage component', () => {
  it('renders error message', () => {
    const { getByText } = render(<ErrorPage />);
    const errorMessage = getByText('Sorry, something went wrong');
    expect(errorMessage).toBeInTheDocument();
  });
});
