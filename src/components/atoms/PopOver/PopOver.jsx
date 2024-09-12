import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import classname from "classname";

const PopOver = (props) => {
  const { data } = props;

  return (
    <>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={classname(
                open && "bg-gray-100",
                "p-1.5 rounded-sm inline-flex item center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100"
              )}
            >
              {data.icon}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                <div className="bg-white rounded-sm shadow-md ring-black  ring-opacity-5 px-2 py-2.5">
                  <strong className="text-gray-700 font-medium">
                    {data.title}
                  </strong>
                  <div className=" mt-2 py-2 text-sm">{data.Item}</div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
};

export default PopOver;
