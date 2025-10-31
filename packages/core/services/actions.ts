import { cookies } from "next/headers";

export async function readCookies() {
  const cookie = await cookies();
  // revalidateTag("/");
  console.log("cookie", cookie);
}
