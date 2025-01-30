import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vactify-2",
  description: "Application de gestion d'intervenants",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={geist.className}>
        <h1>Root layout</h1>
        {children}
        <PrelineScript />
      </body>
    </html>
  );
}
