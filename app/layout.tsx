'use client';

import './globals.css';
import { ButtonAnimationDelay, FormatTitleFromPath } from './Components/HelperFunctions';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from './Menu/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [title, setTitle] = useState('JF Portfolio');
    useEffect(() => {
        setTitle(`${FormatTitleFromPath(pathname)} - JF Portfolio`);
    }, [pathname]);
    useEffect(() => {
        document.title = title;
    }, [title]);
    useEffect(() => {
        document.body.classList.add('animating');
        const timeout = setTimeout(() => {
            document.body.classList.remove('animating');
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
                <div className="background" />
                <div className="relative z-10 min-h-screen">
                    {children}
                </div>
                <ButtonAnimationDelay />
            </body>
        </html>
    );
}
