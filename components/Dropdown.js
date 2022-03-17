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
    <Menu
      as="div"
      className="relative inline-block text-left "
      title="Expand to see all"
    >
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-100">
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
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="bg-gradient-to-r  from-pink-500 to-yellow-500 py-1">
            <Menu.Item>
              <Link href="/projects" passHref>
                <p className="block cursor-pointer  bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                  Projects
                </p>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/tweets" passHref>
                <p className="block cursor-pointer bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                  Tweets Post
                </p>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/blog" passHref>
                <p className="block cursor-pointer bg-white px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900  ">
                  Blog
                </p>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/library" passHref>
                <p className="block cursor-pointer bg-white px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900  ">
                  Library
                </p>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/dashboard" passHref>
                <p className="block cursor-pointer bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                  Dashboard
                </p>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/contact" passHref>
                <p className="block cursor-pointer bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                  Contact
                </p>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/about" passHref>
                <p className="block cursor-pointer bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                  About
                </p>
              </Link>
            </Menu.Item>

            {/* <form method="POST" action="/contact">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full text-left px-4 py-2 text-sm"
                    )}
                  >
                    Contact
                  </button> // after this it reload the page
                )}
              </Menu.Item>
            </form> */}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
