import { FaSearch } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import SearchBar from "@/components/atoms/SearchBar";
import { TbMessage2Bolt } from "react-icons/tb";
import { PopOver } from "@/components/atoms";
import { Menu } from "@headlessui/react";
import UserIcon from "@/utils/UserIcon";

const AdminHeader = () => {
  

  // Data for Message Box
  const MsgData = {
    title: "Messages",
    Item: "This is Messages Panel",
    icon: <TbMessage2Bolt fontSize={24} />,
  };

  // Data for Notification Box
  const NotificationData = {
    title: "Notifications",
    Item: "This is Notification Panel",
    icon: <IoNotifications fontSize={24} />,
  };

  return (
    <div className="bg-white h-16 px-4 flex justify-between items-center border-b border-gray-100">
      <div className="relative flex-1">
        <FaSearch
          fontSize={20}
          className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"
        />
        <SearchBar />
      </div>
      <div className="flex items-center gap-2 ml-auto">
        <PopOver data={MsgData} />
        <PopOver data={NotificationData} />
        <Menu as="div" className="relative">
          <div>
            <Menu.Button className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus-within:ring-neutral-400 ">
              <span className="sr-only">Open user menu</span>
              </Menu.Button>
              <UserIcon />
            </div>
        </Menu>
      </div>
    </div>
  );
};

export default AdminHeader;
