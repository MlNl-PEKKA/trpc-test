import { api, HydrateClient } from "~/trpc/server";
import { World } from "../_components/world";

export const dynamic = "force-dynamic";

export default async function Page() {
  void api.world.read.prefetch();
  return (
    <HydrateClient>
      <World />
    </HydrateClient>
  );
}
