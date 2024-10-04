"use client";
import { PropsWithChildren } from "react";
import Link from "next/link";

export default function LikedPolls({ polls }: PropsWithChildren<any>) {
  return (
    <>
      <main
        className={`flex flex-col bg-white dark:bg-slate-900 items-center lg:px-12 px-8 py-6 h-screen`}
      >
        <section className="flex lg:flex-row flex-col w-full  overflow-y-auto  dark:bg-slate-900">
          {polls &&
            polls.data &&
            polls.data.map((poll: any, index: number) => (
              <aside
                key={index}
                className=" bg-white border border-gray-300 w-full max-w-sm rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2"
              >
                <div className="flex justify-end px-4 pt-4"></div>
                <div className="flex flex-col items-center pb-10">
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {poll.title}
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {poll.description}
                  </span>
                  <div className="flex mt-4 md:mt-6">
                    <Link
                      href={`/poll/${poll._id}`}
                      className="inline-flex items-center px-6 py-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      View Poll
                    </Link>
                  </div>
                </div>
              </aside>
            ))}
        </section>
      </main>
    </>
  );
}
