/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-400">
          More
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              <Link href="/about">
                <p className="bg-white text-gray-700 hover:text-gray-900 hover:bg-gray-100 block px-4 py-2 text-sm cursor-pointer">
                  About
                </p>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/works">
                <p className="bg-white text-gray-700 hover:text-gray-900 hover:bg-gray-100 block px-4 py-2 text-sm cursor-pointer">
                  Works
                </p>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/posts">
                <p className="bg-white text-gray-700 hover:text-gray-900 hover:bg-gray-100 block px-4 py-2 text-sm cursor-pointer">
                  Posts
                </p>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/dashboard">
                <p className="bg-white text-gray-700 hover:text-gray-900 hover:bg-gray-100 block px-4 py-2 text-sm cursor-pointer">
                  Dashboard
                </p>
              </Link>
            </Menu.Item>
            <form method="POST" action="#">
              {/* <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full text-left px-4 py-2 text-sm"
                    )}
                  >
                    
                  </button>
                )}
              </Menu.Item> */}
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
