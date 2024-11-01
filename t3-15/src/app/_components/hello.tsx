"use client";

import { api } from "~/trpc/react";
import Link from "next/link";
import { Suspense } from "react";

export const Hello = () => {
  return (
    <Suspense fallback={<>Loading hello content...</>}>
      <Content />
    </Suspense>
  );
};

const Content = () => {
  const { greeting } = api.hello.read.useSuspenseQuery()[0];
  return (
    <>
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
        {greeting}
      </h1>
      <Link href={"/world"} className="text-2xl">
        {"Hello page ->"}
      </Link>
    </>
  );
};
