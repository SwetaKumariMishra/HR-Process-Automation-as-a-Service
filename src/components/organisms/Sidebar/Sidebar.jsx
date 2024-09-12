import { useState } from "react";
import classname from "classname";
import { BiLogOut, BiMenu } from "react-icons/bi";
import { RiAdminFill } from "react-icons/ri";
import {
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "../../../utils/Navigation/Navigation";
import { Link, useLocation } from "react-router-dom";

const linkClasses =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Hamburger Menu */}
      <div className="flex justify-between items-center p-3 bg-neutral-900 text-white md:hidden">
        <div className="flex items-center gap-2">
          <RiAdminFill fontSize={22} />
          <span className="text-lg uppercase">HR Automation</span>
        </div>
        <button onClick={toggleSidebar} className="text-white">
          <BiMenu fontSize={28} />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={classname(
          "text-white flex flex-col bg-neutral-900 w-60 p-3 transition-transform duration-300 md:static fixed inset-y-0 left-0 transform md:translate-x-0 z-50",
          {
            "-translate-x-full": !isOpen,
            "translate-x-0": isOpen,
          }
        )}
      >
        <div className="flex items-center gap-2 px-3 py-3">
          <RiAdminFill fontSize={22} />
          <span className="text-lg uppercase">HR Automation</span>
        </div>
        <div className="flex-1 py-7 flex flex-col gap-0.5 border-t border-neutral-700">
          {DASHBOARD_SIDEBAR_LINKS.map((item) => (
            <SideBarLinks key={item.key} item={item} />
          ))}
        </div>
        <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
          {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
            <SideBarLinks key={item.key} item={item} />
          ))}
        </div>
        <div className={classname("text-red-500 cursor-pointer", linkClasses)}>
          <span className="text-xl">
            <BiLogOut />
          </span>
          Logout
        </div>
      </div>

      {/* Overlay for mobile view */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;

function SideBarLinks({ item }) {
  const location = useLocation();

  return (
    <Link
      to={item.path}
      className={classname(
        location.pathname === item.path
          ? "text-white bg-neutral-700"
          : "text-neutral-400",
        linkClasses
      )}
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}
