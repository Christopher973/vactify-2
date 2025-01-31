"use client";

import { auth } from "@/lib/auth";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session, status } = useSession();

  return (
    <>
      <div>
        {/* // <!-- Profile --> */}
        <div className="flex items-center gap-x-3">
          <div className="shrink-0">
            <img
              className="shrink-0 size-16 rounded-full"
              src={
                session?.user.image ??
                "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
              }
              alt="Avatar"
            />
          </div>

          <div className="grow">
            <h1 className="text-lg font-medium text-gray-800">
              {session?.user.name}
            </h1>
            <p className="text-sm text-gray-600">
              Vous êtes : {session?.user.role}
            </p>
          </div>
        </div>
        {/* <!-- End Profile --> */}

        {/* <!-- About --> */}
        <div className="mt-8">
          <ul className="mt-5 flex flex-col gap-y-3">
            <li className="flex items-center gap-x-2.5">
              <svg
                className="shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <a
                className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2"
                href={`mailto:${session?.user.email}`}
              >
                {session?.user.email}
              </a>
            </li>
          </ul>
        </div>
        {/* <!-- End About --> */}
      </div>
    </>
  );
}
