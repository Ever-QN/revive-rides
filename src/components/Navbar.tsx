import { createClient } from '@/app/utils/supabase/server';
import Navlinks from './Navlinks';


interface NavlinksProps {
  user?: any;
}

export default async function Navbar({ user } : NavlinksProps) {
  const supabase = createClient();

  return (
    <nav className='bg-primary text-primary-foreground z-50 text-nowrap'>
      <div className="max-w-6xl px-6 mx-auto">
        <Navlinks user={user}/>
      </div>
    </nav>
  );
}