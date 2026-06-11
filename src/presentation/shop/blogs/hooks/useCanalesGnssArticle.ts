import { useEffect, useState } from "react";
import type { BlogArticleLists } from "@/core";
import { useBlogsStore } from "../state";

export const useCanalesGnssArticle = () => {
  const getCanalesGnssLists = useBlogsStore((state) => state.getCanalesGnssLists);
  const listsFromStore = useBlogsStore((state) => state.canalesGnssLists);
  const [lists, setLists] = useState<BlogArticleLists>(listsFromStore);

  useEffect(() => {
    let isMounted = true;

    getCanalesGnssLists().then((backendLists) => {
      if (isMounted) {
        setLists(backendLists);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [getCanalesGnssLists]);

  return lists;
};
