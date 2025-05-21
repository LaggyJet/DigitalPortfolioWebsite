import './globals.css';
import { ReactNode } from 'react';
import Header from './Header/Header';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <body>
            <Header />
            <div className="background">
            {children}
            </div>
        </body>
        </html>
    );
}
