import Link from "next/link";
import type { NextPage } from "next";

const AppPage: NextPage = () => {
  return (
    <div>
      <h1>Content</h1>
      <nav>
        <Link href="home">
          Home Page
        </Link>
      </nav>
    </div>
  );
};

export default AppPage;