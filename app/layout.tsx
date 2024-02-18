import "./globals.css";
import type { Metadata } from "next";
import Providers from "./utils/providers.utils";
import FooterBar from "./components/footer/footer.component";
import MenuBar from "./components/menu-bar/menu-bar.component";

export const metadata: Metadata = {
  title: "Csíkszentmiklós",
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
