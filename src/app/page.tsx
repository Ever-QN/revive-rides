import Image from 'next/image';
import Link from 'next/link';
import LoginPage from './manager-ui/page';

export default function HomePage() {
  return (
    <div>
      <ul>
        <Link href="manager-ui">Go to Login Page</Link>
      </ul>
    </div>
  );
}