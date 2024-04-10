import React from 'react';
import { render, screen } from '@testing-library/react';
import UserBookingsTable from '@/components/UserBookingsTable';

describe('UserBookingsTable', () => {
  jest.mock('@/app/utils/supabase/client', () => ({
    createClient: jest.fn(() => ({
      auth: {
        getUser: jest.fn(() => ({ data: { user: { email: 'john@gmail.com' } } })),
      },
      from: jest.fn(() => ({
        select: jest.fn().mockReturnValue({ data: [], error: null }),
      })),
    })),
  }));

  test('renders loading message initially', async () => {
    render(<UserBookingsTable />);

    expect(screen.getByText('Loading Appointments...')).toBeInTheDocument();
  });

  test('renders no appointments message when there are no bookings', async () => {
    render(<UserBookingsTable />);

    expect(screen.getByText('You have no appointments')).toBeInTheDocument();
  });

});

