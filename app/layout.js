import localFont from "next/font/local";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/system";

export const metadata = {
  title: "Mystic Pals",
  description: "connect with your friends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Sixtyfour+Convergence&display=swap"
        />
      </head>
      <body className="">
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
