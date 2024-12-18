"use client";

// import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Inter } from "next/font/google";
// import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { Inter } from "next/font/google";
import {
  Box,
  colors,
  CssBaseline,
  Toolbar,
  // Toolbar,
} from "@mui/material";

import SideBar from "./conmponents/sidebar";
import Navigation  from "./conmponents/navigation";
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

// const metadata: Metadata = {
//   title: "Debete App",
//   description: "Debete App",
// };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#212121',
        dark: '#2F2F2F'
        }
      }
  })

  // const lightTheme = createTheme({
  //   palette: {
  //     mode: 'light',
  //     secondary: {
  //       main: '#FFFFFF',
  //       light: '#F0F4F8',
  //       }
  //     }
  // })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className, colors.th}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={darkTheme}>
          <Box sx={{ display: "flex" }}>
            {/* defalut CSSのリセット */}
            <CssBaseline />
            <Navigation />
              <SideBar />
              {/* ここは初期はスタートページ */}
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Toolbar />
              {children}
            </Box>
          </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
    </html>
  );
}
