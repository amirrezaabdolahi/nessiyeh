"use client";

import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { rtlCache } from "@/theme/rtlCache";
import { theme } from "@/theme/theme";

export default function ThemeRegistry({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <CacheProvider value={rtlCache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </CacheProvider>
    );
}

// <CacheProvider value={rtlCache}>
//   <ThemeProvider theme={theme}>
//     <CssBaseline />
//     {children}
//   </ThemeProvider>
// </CacheProvider>
