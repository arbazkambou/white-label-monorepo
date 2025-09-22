export interface Country {
  id: number;
  code: string;
  code_alpha3: string;
  local_state_code: string | null;
  name: string;
  image_url: string;
  slug: string;
  starts_at?: string;
  href: string;
}

export interface CountriesThatHavePackagesResponeType {
  status: boolean;
  data: Country[];
}

export interface Continent {
  id: number;
  name: string;
  code?: string;
  created_at: string | null;
  updated_at: string;
  image_url: string;
  slug: string;
  rating: number;
  review: number;
  total_supported_countries: number;
  supported_countries_images: string[];
  href: string;
}

export interface GetContinentsResponse {
  status: string;
  data: Continent[];
}

export interface Region extends Continent {
  countries: Country[];
}

interface GlobalVoice {
  id: number;
  name: string;
  image_url: string;
  code: string;
  countries: Country[];
}

export interface PackagesList {
  local: Country[];
  regional: Region[];
  global: Country[];
  local_voice: Country[];
  regional_voice: Region[];
  global_voice: GlobalVoice[];
}

export interface Global {
  href: string;
  countries: Country[];
}

export interface SearchPackagesList {
  status: boolean;
  data: PackagesList;
}

export interface SearchPackagesListReturn {
  local: Country[];
  regional: Region[];
  global: Global;
  local_voice: Country[];
  regional_voice: Region[];
  global_voice: Global;
}

export interface TopDestination {
  id: number;
  name: string;
  slug: string;
  cover_image: string;
  image_url: string;
}

export interface TopDestinations {
  status: boolean;
  data: TopDestination[];
}
