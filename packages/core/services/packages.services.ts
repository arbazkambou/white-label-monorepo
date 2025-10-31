import {
  globalErrorHandler,
  globalResponseHandler,
} from "../helpers/globalResponseHandler";
import { baseUrl } from "../lib/API";
import {
  Country,
  SearchPackagesList,
  SearchPackagesListReturn,
  TopDestinations,
} from "../types/packages.types";

export async function searchPackagesList(): Promise<SearchPackagesListReturn> {
  console.log("hello", `${baseUrl}/search-package-list`);
  const response = await fetch(`${baseUrl}/search-package-list`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const apiData: SearchPackagesList = await response.json();

  if (!response.ok || !apiData.status) {
    throw new Error(globalResponseHandler(apiData, response.status));
  }

  const { global, global_voice, local, local_voice, regional, regional_voice } =
    apiData.data;

  const globalDataOnly: { href: string; countries: Country[] } = {
    href: "global",
    countries: global,
  };

  const localDataOnly = local.map((country) => ({
    ...country,
    href: `/esim/${country.slug}/`,
  }));

  const regionalDataOnly = regional.map((region) => ({
    ...region,
    href: `/regional/${region.slug}/`,
  }));

  const globalDataVoice: { href: string; countries: Country[] } = {
    href: "/international-esim/",
    countries: global_voice.flatMap((item) => item.countries),
  };

  const localDataVoice = local_voice.map((country) => ({
    ...country,
    href: `/${country.slug}-esim/`,
  }));

  const regionalDataVoice = regional_voice.map((region) => ({
    ...region,
    href: `/${region.slug}-esim/`,
  }));

  return {
    global: globalDataOnly,
    local: localDataOnly,
    regional: regionalDataOnly,
    global_voice: globalDataVoice,
    local_voice: localDataVoice,
    regional_voice: regionalDataVoice,
  };
}

export async function getTopDestinations() {
  try {
    const response = await fetch(`${baseUrl}/top-destinations`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const apiData: TopDestinations = await response.json();

    if (!response.ok || !apiData.status) {
      throw new Error(globalResponseHandler(apiData, response.status));
    }

    return apiData.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}
