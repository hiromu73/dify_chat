"use client";

import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Inter } from "next/font/google";
// import localFont from "next/font/local";
import "./globals.css";
// import { Inter } from "next/font/google";
import {
  Box,
  CssBaseline,
  Toolbar,
} from "@mui/material";

import SideBar from "./conmponents/sidebar";
import { Navigation } from "@mui/icons-material";
// const inter = Inter({ subsets: ["latin"] });

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <Box sx={{ display: "flex" }}>
            
            <CssBaseline />
            <Navigation />
            <SideBar />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Toolbar />
              {children}
            </Box>
          </Box>

        </AppRouterCacheProvider>
        </body>
    </html>
  );
}
