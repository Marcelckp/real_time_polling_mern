"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [pollData, setPollData] = useState<Array<any>>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3030/poll");
        const { data } = await response.json();
        setPollData(data);
      } catch (error) {
        console.error("Error fetching poll data:", error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex justify-center items-center bg-white dark:bg-gray-900 h-screen">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Polls App
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          Create Polls easily. Share with friends and see results as they get
          added realtime!
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 flex-wrap gap-5">
          {pollData ? (
            pollData?.map((poll: any) => (
              <div
                key={poll.id}
                className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {poll.text}
                </h2>
              </div>
            ))
          ) : (
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Loading...
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
