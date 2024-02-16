import Link from 'next/link';
import type { NextPage } from 'next';

const AppPage: NextPage = () => {
  return (
    <div>
      <h1>App Page Content</h1>
      <nav>
        <Link href="login">Go To Login Page</Link>
      </nav>
    </div>
  );
};

export default AppPage;
