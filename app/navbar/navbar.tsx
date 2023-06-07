"use client";

import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Book", href: "/book" },
  { name: "Staff", href: "/staff" },
];

const NavBar = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 sticky top-0 border-b">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </Link>
          </div>
        </div>
        <div className="ml-10 flex items-center space-x-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-black hover:bg-slate-100 hover:text-slate-900 rounded-md px-3 py-2 text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          <button
            type="button"
            className="rounded-md p-1 text-black hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            <span className="sr-only">Shopping Cart</span>
            <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export { NavBar };
