import appleLink from "@/assets/images/appleLink.svg";
import playLink from "@/assets/images/playLink.svg";
import Image from "next/image";
import Link from "next/link";

// interface SocialsButtonsProps {
//   platform: "desktop" | "ios" | "android" | null;
// }

// function SocialsButtons({ platform }: SocialsButtonsProps) {
//   const showAndroid = platform === "android" || platform === "desktop" || platform === null;
//   const showApple = platform === "ios" || platform === "desktop" || platform === null;

//   return (
//     <div className="flex items-center">
//       {showAndroid && (
//         <Link
//           href={
//             "https://play.google.com/store/apps/details?id=com.activatewireless.esim_card"
//           }
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <div className="relative h-[40px] w-[120px] transition-all hover:opacity-80 sm:h-[50px] sm:w-[150px] xl:h-[45px] xl:w-[170px]">
//             <Image src={playLink} fill alt="eSIM Card android app" sizes="auto" />
//           </div>
//         </Link>
//       )}
//       {showApple && (
//         <Link
//           href={"https://apps.apple.com/app/id1627173767"}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <div className="relative h-[40px] w-[120px] transition-all hover:opacity-80 sm:h-[50px] sm:w-[150px] xl:h-[45px] xl:w-[170px]">
//             <Image src={appleLink} fill alt="eSIM Card ios app" sizes="auto" />
//           </div>
//         </Link>
//       )}
//     </div>
//   );
// }

// export default SocialsButtons;

interface SocialsButtonsProps {
  platform?: "desktop" | "ios" | "android" | null; // Optional prop
}

export default function SocialsButtons({
  platform,
  // isHome = false,
  // isBlog = false,
}: SocialsButtonsProps) {
  // Default to both buttons if no platform prop is passed
  if (!platform) {
    return (
      <div className="flex items-center gap-4">
        <Link
          href="https://play.google.com/store/apps/details?id=com.activatewireless.esim_card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative h-[50px] w-[150px] transition-all hover:opacity-80 xl:h-[45px] xl:w-[170px]">
            <Image
              src={playLink}
              fill
              alt="eSIM Card Android app"
              sizes="auto"
            />
          </div>
        </Link>
        <Link
          href="https://apps.apple.com/app/id1627173767"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative h-[50px] w-[150px] transition-all hover:opacity-80 xl:h-[45px] xl:w-[170px]">
            <Image src={appleLink} fill alt="eSIM Card iOS app" sizes="auto" />
          </div>
        </Link>
      </div>
    );
  }

  // Conditional single link based on platform and context (isHome/isBlog)
  const showAndroid = platform === "android";
  const showApple = platform === "ios";

  return (
    <div className="flex items-center gap-[5rem] md:hidden">
      {showAndroid && (
        <Link
          href="https://play.google.com/store/apps/details?id=com.activatewireless.esim_card"
          target="_blank"
          rel="noopener noreferrer"
          className="order-0 md:order-10"
        >
          <div className="relative h-[40px] w-[120px] transition-all hover:opacity-80 sm:h-[50px] sm:w-[150px] xl:h-[45px] xl:w-[170px]">
            <Image
              src={playLink}
              fill
              alt="eSIM Card Android app"
              sizes="auto"
            />
          </div>
        </Link>
      )}
      {showApple && (
        <Link
          href="https://apps.apple.com/app/id1627173767"
          target="_blank"
          rel="noopener noreferrer"
          className="order-0 md:order-10"
        >
          <div className="relative h-[40px] w-[120px] transition-all hover:opacity-80 sm:h-[50px] sm:w-[150px] xl:h-[45px] xl:w-[170px]">
            <Image src={appleLink} fill alt="eSIM Card iOS app" sizes="auto" />
          </div>
        </Link>
      )}
    </div>
  );
}
