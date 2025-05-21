'use client';

import './globals.css';
import Header from './Header/Header';
import { ButtonAnimationDelay, formatTitleFromPath } from './Components/HelperFunctions';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [title, setTitle] = useState('JF Portfolio');
    useEffect(() => {
        setTitle(`${formatTitleFromPath(pathname)} - JF Portfolio`);
    }, [pathname]);
    useEffect(() => {
        document.title = title;
    }, [title]);
    return (
        <html lang="en" style={{ backgroundColor: "#151517" }}>
        <head>
            <title>{title}</title>
        </head>
        <body style={{ backgroundColor: "#151517" }}>
            <Header />
            <div className="background">{children}</div>
            <ButtonAnimationDelay />
        </body>
        </html>
    );
}
