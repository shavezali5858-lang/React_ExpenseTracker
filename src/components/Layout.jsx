import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />

      <main className="ml-16 md:ml-64 w-[calc(100%-4rem)] md:w-[calc(100%-16rem)]">
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;