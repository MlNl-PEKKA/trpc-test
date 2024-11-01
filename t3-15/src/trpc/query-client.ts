import {
  defaultShouldDehydrateQuery,
  QueryClient,
} from "@tanstack/react-query";
import SuperJSON from "superjson";

export const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        experimental_prefetchInRender: true,
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        // staleTime: 30 * 1000,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        // initialDataUpdatedAt: Date.now(), // <------------Doesn't seem to work,
        // Returns 0 for each query prefetched on a dev server
        // Returns 0 for each query prefetched on a prod server
      },
      dehydrate: {
        serializeData: SuperJSON.serialize,
        shouldDehydrateQuery: (query) => {
          console.log(query.queryHash, "🔥 Before", query.state.dataUpdatedAt);
          // query.state.dataUpdatedAt = Date.now(); //             <--------------A workaround for the above
          console.log(query.queryHash, "🔥 After", query.state.dataUpdatedAt);
          return (
            defaultShouldDehydrateQuery(query) ||
            query.state.status === "pending"
          );
        },
      },
      hydrate: {
        deserializeData: SuperJSON.deserialize,
      },
    },
  });
