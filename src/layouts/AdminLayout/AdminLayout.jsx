import { AdminHeader, Sidebar } from "@/components/organisms";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <AdminHeader />
          <div className="p-4 ">{<Outlet />}</div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
