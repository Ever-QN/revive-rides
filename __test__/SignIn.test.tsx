import { render, screen, waitFor, renderHook, act, getByLabelText, fireEvent, getByText } from '@testing-library/react';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import userEvent from '@testing-library/user-event';
import { createClient } from '@/app/utils/supabase/client';
import SignIn from '@/app/sign-in/page';


jest.mock('@/app/utils/supabase/client', () => ({
    createClient: jest.fn(() => ({
        auth: { signInWithPassword: jest.fn() }
    })),
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
});
