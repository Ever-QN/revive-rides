import React from 'react';
import { createClient } from '../utils/supabase/client';
import { redirectToPath } from '../utils/auth-helpers/server';

export default async function Layout({
    children
}: {
    children: React.ReactNode;
}) {

    const supabase = createClient();

    const { data: { user }} = await supabase.auth.getUser();

    if (!user) {
        redirectToPath("/signin");
    }

    return (
        <>
            {children}
        </>
    )
}