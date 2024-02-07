import type { NextPage } from "next";
import Nav from "./navbar/NavBar";

const AppPage: NextPage = () => {
  return (
    <div>
      <Nav />
      <h1>app Page, page 2</h1>
    </div>
  );
};
export default AppPage;