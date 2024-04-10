import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createClient } from '@/app/utils/supabase/client';
import SignIn from '@/app/sign-in/page';


import { z } from 'zod';

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
    }); // Add a closing curly brace here
});