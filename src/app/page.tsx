import Link from 'next/link';
import type { NextPage } from 'next';

const AppPage: NextPage = () => {
  return (
    <div>
      <h1>App Page Content</h1>
      <nav>
        <Link href="booking">Go To Booking Page</Link>
      </nav>
    </div>
  );
};

export default AppPage;
