import { ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface PropsType {
  index: number;
  href: string;
  image_url: string | StaticImageData;
  countryName: string;
}

function CountryItem({ countryName, href, image_url }: PropsType) {
  return (
    <div>
      <Link
        className="flex justify-between rounded-full p-2 transition hover:bg-secondary"
        href={href}
      >
        <div className="flex items-center gap-3">
          <div className="relative h-[20px] w-[30px]">
            <Image
              src={image_url}
              alt={`${countryName} Packages`}
              className="rounded object-cover shadow-lg"
              fill
            />
          </div>
          <p className="text-sm font-500 text-foreground-light">
            {countryName}
          </p>
        </div>

        <ChevronRight size={22} />
      </Link>
    </div>
  );
}

export default CountryItem;
