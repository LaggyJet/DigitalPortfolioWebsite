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
        if (pathname) {
        const formatted = FormatTitleFromPath(pathname);
        setTitle(`${formatted} - JF Portfolio`);
        }
    }, [pathname]);
    useEffect(() => {
        document.title = title;
    }, [title]);
    useEffect(() => {
        const el = document.body;
        el.classList.add('animating');
        const timeout = setTimeout(() => el.classList.remove('animating'), 1000);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <html lang="en" style={{ backgroundColor: '#151517' }}>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="referrer" content="strict-origin" />
                <title>{title}</title>
            </head>
            <body style={{ backgroundColor: '#151517' }}>
                <Header />
                <div className="background" />
                <main className="relative z-10 min-h-screen">{children}</main>
                <ButtonAnimationDelay />
            </body>
        </html>
    );
}
