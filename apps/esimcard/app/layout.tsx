import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import "@workspace/ui/esimcard.css";
import { ReactQueryProvider } from "@workspace/core/providers/ReactQueryProvider";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <ReactQueryProvider>
          <Providers>{children}</Providers>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
