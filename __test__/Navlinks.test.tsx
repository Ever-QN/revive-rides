import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event' 
import Navlinks from '@/components/Navlinks'

// jest.mock('next/router', () => ({
//     __esModule: true,
//     useRouter: jest.fn().mockReturnValue({}),
//   }));

describe('Navlinks', () => {
    it('should render the navigation links', () => {
        //const user = { email: 'john@example.com' }
        render(<Navlinks user={null}/>)
        
        expect(screen.getByText('Home')).toBeInTheDocument()
        expect(screen.getByText('About Us')).toBeInTheDocument()
        expect(screen.getByText('Contact Us')).toBeInTheDocument()
    })

    // it('should render the user dropdown when a user is authenticated', () => {
    //     const user = { email: 'test@example.com' };
    //     render(<Navlinks user={user} />);
    
    //     // Verify that the user dropdown is rendered
    //     expect(screen.getByText(`Signed in as ${user.email}`)).toBeInTheDocument();
    //   });

    it('should render the "Login or Sign-Up" button when no user is authenticated', () => {
        render(<Navlinks user={null} />)

        expect(screen.getByText('Login or Sign-Up')).toBeInTheDocument()
    })

    // it('should render the "Sign Out" button when a user is authenticated and handle sign out', async () => {
    //     const user = { email: 'test@example.com' }
    //     render(<Navlinks user={user} />)

    //     const signOutButton = screen.getByText('Sign Out')
    //     expect(signOutButton).toBeInTheDocument()

    //     const mockSignOut = jest.fn()
      
    //     const mockSupabase = {
    //         auth: {
    //             signOut: mockSignOut
    //         }
    //     }
    //     jest.mock('@/app/utils/supabase/client', () => ({
    //         createClient: () => mockSupabase
    //     }))

    //     userEvent.click(signOutButton)

    //     expect(mockSignOut).toHaveBeenCalled()
    // })
})