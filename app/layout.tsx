// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Header from './Header/Header';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <body>
            <Header /> {}
            <div
            className="background"
            style={{
                backgroundImage: 'url(/MainBackground.png)',
                paddingTop: '60px', 
            }}
            >
            {children}
            </div>
        </body>
        </html>
    );
}
