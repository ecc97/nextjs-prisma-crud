import type { Metadata } from "next";
import { Inter } from "next/font/google"
import localFont from "next/font/local";
import "./globals.css";
import { NotesProvider } from "@/context/NoteContext";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Crud Notas",
  description: "Crud Notes is a simple crud app", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${inter.className}`}
      >
        <NotesProvider>
          {children}
        </NotesProvider>
      </body>
    </html>
  );
}
