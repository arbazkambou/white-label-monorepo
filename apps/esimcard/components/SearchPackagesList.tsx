"use client";

import useMediaQuery from "@workspace/core/hooks/useMediaQuery";
import usePackagesList from "@workspace/core/hooks/usePackagesList";
import useTopDestinations from "@workspace/core/hooks/useTopDestinations";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer";
import { Input } from "@workspace/ui/components/input";
import { Search } from "lucide-react";
import CountryRegionSearch from "./CountryRegionSearch";

function SearchPackagesList() {
  // const [isClient, setIsClient] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const { isListLoading, packagesList } = usePackagesList();
  const { isDestinationsLoading, topDestinations } = useTopDestinations();
  // const { data: packagesList, isLoading: isListLoading } = useQuery({
  //   queryKey: ["search-packages-list"],
  //   queryFn: SearchPackagesList,
  //   staleTime: Infinity,
  //   enabled: isClient,
  // });

  const isDataLoading = isListLoading || isDestinationsLoading;

  return isDesktop ? (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative z-50 w-full">
          <Input
            placeholder="Search your destination"
            className="w-full rounded-full shadow"
            readOnly
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 transform text-primary" />
        </div>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-montserrat text-lg font-semibold">
            Search your destination
          </DialogTitle>
        </DialogHeader>
        <CountryRegionSearch
          packagesList={packagesList!}
          topDesinations={topDestinations!}
          isDataLoading={isDataLoading}
        />
      </DialogContent>
    </Dialog>
  ) : (
    <Drawer repositionInputs={false}>
      <DrawerTrigger asChild>
        <div className="relative z-20 w-full">
          <Input
            placeholder="Search your destination"
            className="w-full rounded-full shadow"
            readOnly
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 transform text-primary" />
        </div>
      </DrawerTrigger>
      <DrawerContent className="p-3">
        <DrawerHeader className="p-0">
          <DrawerTitle className="mb-2 text-start font-montserrat text-lg font-semibold">
            Search your destination
          </DrawerTitle>
        </DrawerHeader>
        <CountryRegionSearch
          packagesList={packagesList!}
          topDesinations={topDestinations!}
          isDataLoading={isDataLoading}
        />
      </DrawerContent>
    </Drawer>
  );
}

export default SearchPackagesList;
