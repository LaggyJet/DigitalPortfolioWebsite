'use client';

import './globals.css';
import { ButtonAnimationDelay, formatTitleFromPath } from './Components/HelperFunctions';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from './Menu/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [title, setTitle] = useState('JF Portfolio');
    useEffect(() => {
        setTitle(`${formatTitleFromPath(pathname)} - JF Portfolio`);
    }, [pathname]);
    useEffect(() => {
        document.title = title;
    }, [title]);
    useEffect(() => {
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
        const timeout = setTimeout(() => {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);
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
