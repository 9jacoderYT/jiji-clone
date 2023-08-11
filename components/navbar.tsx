"use client";

import { signOut, signIn } from "next-auth/react";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DiamondIcon from "@mui/icons-material/Diamond";
import ViewListIcon from "@mui/icons-material/ViewList";

import { useRouter, redirect, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const router = useRouter();
  // Get the params of the User
  const pathname = usePathname();

  // Help check if the user is logged in and help redirect if they are not
  const session: any = useSession<any | null | undefined>();

  console.log(session);

  return (
    <div className="flex py-1 space-x-3 mx-auto max-w-6xl">
      <div className="flex-1 my-auto">
        <img
          src="/logo.jpeg"
          alt="Logo"
          onClick={() => router.push("/")}
          className="w-8 ml-5 hover:cursor-pointer"
        />
      </div>

      <div
        className="p-[5px] rounded-full bg-white tooltip tooltip-bottom"
        data-tip="Bookmark"
      >
        <BookmarkIcon />
      </div>
      <div
        className="p-[5px] rounded-full bg-white tooltip tooltip-bottom"
        data-tip="Messages"
      >
        <MessageIcon />
      </div>

      <div
        className="p-[5px] rounded-full bg-white tooltip tooltip-bottom"
        data-tip="Notifications"
      >
        <NotificationsIcon />
      </div>

      <div
        className="p-[5px] rounded-full bg-white tooltip tooltip-bottom"
        data-tip="Premium Services"
      >
        <DiamondIcon />
      </div>

      <div
        className="p-[5px] rounded-full bg-white tooltip tooltip-bottom hover:cursor-pointer"
        data-tip="My Adverts"
        onClick={() => router.push(`/myadverts/${session.data?.user.email}`)}
      >
        <ViewListIcon />
      </div>

      <div className="dropdown dropdown-hover my-auto dropdown-bottom dropdown-end">
        <img
          src={session.data?.user.image || "/logo.jpeg"}
          className="rounded-full w-8"
          alt="logo"
        />
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu shadow bg-base-100 rounded-sm w-40"
        >
          <li>
            <a>My Shop</a>
          </li>
          <li>
            <a>My clients</a>
          </li>
          <li>
            <a>Feedback</a>
          </li>
          <li>
            <a>Performance</a>
          </li>
          <li className="">
            <a>My Balance</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            {session.data && <button onClick={() => signOut()}>Log out</button>}
            {!session.data && <button onClick={() => signIn()}>Sign In</button>}
          </li>
        </ul>
      </div>

      <button
        onClick={() => router.push("/create")}
        className="btn btn-warning btn-sm my-auto mr-10"
      >
        SELL
      </button>
    </div>
  );
}
