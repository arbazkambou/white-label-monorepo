//   const { data: topDestinations, isLoading: isDestinationsLoading } = useQuery({
//     queryKey: ["top-destinations"],
//     queryFn: getTopDestinations,
//     staleTime: Infinity,
//     enabled: isClient,
//   });

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { searchPackagesList } from "../services/packages.services";

function usePackagesList() {
  const [isClient, setIsClient] = useState(false);
  const { data: packagesList, isLoading: isListLoading } = useQuery({
    queryKey: ["search-packages-list"],
    queryFn: searchPackagesList,
    staleTime: Infinity,
    enabled: isClient,
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  return { packagesList, isListLoading };
}

export default usePackagesList;
