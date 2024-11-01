"use client";

import { api } from "~/trpc/react";
import Link from "next/link";
import { Suspense } from "react";

export const World = () => {
  return (
    <Suspense fallback={<>Loading world content...</>}>
      <Content />
    </Suspense>
  );
};

const Content = () => {
  const { greeting } = api.world.read.useSuspenseQuery()[0];
  return (
    <>
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
        {greeting}
      </h1>
      <Link href={"/"} className="text-2xl">
        {"<- World page "}
      </Link>
    </>
  );
};
