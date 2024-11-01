import { api, HydrateClient } from "~/trpc/server";
import { Hello } from "./_components/hello";

export const dynamic = "force-dynamic";

export default async function Home() {
  void api.hello.read.prefetch();
  return (
    <HydrateClient>
      <Hello />
    </HydrateClient>
  );
}
