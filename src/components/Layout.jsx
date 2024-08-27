import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <main style={{ padding: "50px", backgroundColor: "yellow" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
