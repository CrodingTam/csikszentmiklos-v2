import "./globals.css";
import type { Metadata } from "next";
import Providers from "./utils/providers.utils";
import MenuBar from "./components/menu/bar/component";
import FooterBar from "./components/footer/component";

export const metadata: Metadata = {
  title: "Csíkszentmiklós's website",
  description: "Get to know our community through this website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <MenuBar />
          {children}
          <FooterBar />
        </Providers>
      </body>
    </html>
  );
}
