import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTopDestinations } from "../services/packages.services";

function useTopDestinations() {
  const [isClient, setIsClient] = useState(false);

  const { data: topDestinations, isLoading: isDestinationsLoading } = useQuery({
    queryKey: ["top-destinations"],
    queryFn: getTopDestinations,
    staleTime: Infinity,
    enabled: isClient,
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  return { topDestinations, isDestinationsLoading };
}

export default useTopDestinations;
