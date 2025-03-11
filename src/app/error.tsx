"use client";

import Link from "next/link";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F8FAFC] px-6 text-center">
      <h4 className="text-2xl font-bold text-gray-900 lg:text-3xl">
        Oops! Something Went Wrong
      </h4>
      <h1 className="mt-4 text-lg text-red-600 font-medium">
        Error Message: {error.message}
      </h1>
      <p className="mt-4 text-gray-600 text-lg">
        We apologize, but an unexpected error has occurred. Please try again
        later.
      </p>
      <div className="mt-8 flex gap-4">
        <button
          onClick={() => reset()}
          className="inline-flex h-12 items-center justify-center rounded-lg bg-gray-800 px-6 font-semibold text-white hover:bg-gray-900 transition-colors duration-200"
        >
          Try Again
        </button>
        <Link
          href={"/"}
          className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-6 font-semibold text-white hover:bg-blue-700 transition-colors duration-200"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
