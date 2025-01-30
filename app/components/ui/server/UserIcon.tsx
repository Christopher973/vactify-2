"use client";

import { signOut } from "next-auth/react";
import type { User } from "next-auth";

interface UserIconProps {
  user?: User | null;
}

export default function UserIcon({ user }: UserIconProps) {
  return (
    <div>
      <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
        <button
          id="hs-dropdown-account"
          type="button"
          className="size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
        >
          <img
            className="shrink-0 size-[38px] rounded-full"
            src={
              user?.image ??
              "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
            }
            alt="Avatar"
          />
        </button>

        <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2">
          <div className="py-3 px-5 bg-gray-100 rounded-t-lg">
            <p className="text-sm text-gray-500">Signed in as</p>
            <p className="text-sm font-medium text-gray-800">{user?.email}</p>
          </div>
          {/* ... Reste du menu ... */}
          <a
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            href="#"
            onClick={() => signOut()}
          >
            Sign Out
          </a>
        </div>
      </div>
    </div>
  );
}
