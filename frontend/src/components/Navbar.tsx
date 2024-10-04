"use client";
import { PropsWithChildren } from "react";

export default function Navbar({ user }: PropsWithChildren<any>) {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
        </div>
      </div>

    </nav>
  );
}
