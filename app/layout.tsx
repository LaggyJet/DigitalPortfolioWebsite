import './globals.css';
import { ReactNode } from 'react';
import Header from './Header/Header';
import ButtonAnimationDelay from './Components/ButtonAnimationDelay';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" style={{ backgroundColor: "#151517" }}>
            <body style={{ backgroundColor: "#151517" }}>
                <Header />
                <div className="background">
                    {children}
                </div>
                <ButtonAnimationDelay />
            </body>
        </html>
    );
}
