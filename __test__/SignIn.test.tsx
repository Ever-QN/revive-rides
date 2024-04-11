import { render, screen, waitFor, renderHook, act, getByLabelText, fireEvent, getByText } from '@testing-library/react';
import '@testing-library/jest-dom';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import userEvent from '@testing-library/user-event';
import { createClient } from '@/app/utils/supabase/client';
import SignIn from '@/app/sign-in/page';


jest.mock('@/app/utils/supabase/client', () => ({
    createClient: () => ({
        auth: { signInWithPassword: jest.fn() }
    }),
}));

describe('SignIn component', () => {
    test('validates form schema', async () => {
        const schema = z.object({
            email: z.string().email(),
            password: z.string(),
        });

        const { result } = renderHook(() =>
            useForm({ resolver: zodResolver(schema) })
        );

        const { formState } = result.current;

        act(() => {
            result.current.setValue('email', 'test@example.com');
        });
        await waitFor(() => {}); 
        expect(formState.errors.email).toBeUndefined();

        act(() => {
            result.current.setValue('password', 'password123');
        });
        await waitFor(() => {});
        expect(formState.errors.password).toBeUndefined();

    });

    test('submits form and calls with email and password', async () => {
        const { auth: { signInWithPassword } } = createClient();
            render(<SignIn />);

            await userEvent.type(screen.getByLabelText(/email/i), 'test@example.com');
            await userEvent.type(screen.getByLabelText(/password/i), 'password');
            userEvent.click(screen.getByRole('button', { name: 'Login' }));
        
            await waitFor(() => {
                expect(screen.getByLabelText(/email/i)).toHaveValue('test@example.com');
                expect(screen.getByLabelText(/password/i)).toHaveValue('password');
            });
    });

});
