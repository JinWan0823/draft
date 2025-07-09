import "./globals.css";
import ModeBtn from "@/_components/common/ModeBtn";
import MenuBtn from "@/_components/common/MenuBtn";
import { AlertProvider } from "@/_context/AlertContext";
import SessionProviderWrapper from "./SessionProviderWrapper";
import AdminBadge from "@/_components/common/AdminBadge";

export const metadata = {
  title: {
    default: "FC25 드래프트",
    template: "%s | FC25 드래프트",
  },
  description: "축구 선수 티어, 전술, 드래프트 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SessionProviderWrapper>
          <AlertProvider>
            <main>{children}</main>
            <footer></footer>
            <MenuBtn />
            <ModeBtn />
            <AdminBadge />
          </AlertProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
