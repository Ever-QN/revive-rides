import { GET } from '@/app/auth/reset_password/route';
import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { createClient } from '@/app/utils/supabase/server';


jest.mock('@/app/utils/supabase/server', () => ({
  createClient: jest.fn()
}));

describe('GET handler', () => {
  it('should handle authentication code exchange and redirect successfully', async () => {
    const mockRequest = {
        url: '',
        origin: ''
    } as unknown as NextRequest;

    const mockExchangeCodeForSession = jest.fn().mockResolvedValue({ error: null });
    (createClient as jest.Mock).mockReturnValueOnce({ auth: { exchangeCodeForSession: mockExchangeCodeForSession } });

    const mockRedirect = jest.spyOn(NextResponse, 'redirect').mockReturnValueOnce(new NextResponse());

    await GET(mockRequest);

    expect(mockExchangeCodeForSession).toHaveBeenCalledWith('12345');

    expect(mockRedirect).toHaveBeenCalledWith({
      url: ''
    });
  });

});
