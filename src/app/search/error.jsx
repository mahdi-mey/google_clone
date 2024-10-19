"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log("error", error);
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center mt-5 gap-6">
      <h1 className="text-xl text-center">Some thing went wrong</h1>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/confused.gif"
        className="w-2/5"
        alt="page not found image"
      />
    </div>
  );
}
