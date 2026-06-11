import { useEffect, useState } from "react";
import type { BlogArticleLists } from "@/core";
import { useBlogsStore } from "../state";

export const useCalibrationArticle = () => {
  const getCalibrationLists = useBlogsStore((state) => state.getCalibrationLists);
  const listsFromStore = useBlogsStore((state) => state.calibrationLists);
  const [lists, setLists] = useState<BlogArticleLists>(listsFromStore);

  useEffect(() => {
    let isMounted = true;

    getCalibrationLists().then((backendLists) => {
      if (isMounted) {
        setLists(backendLists);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [getCalibrationLists]);

  return lists;
};
