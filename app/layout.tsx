import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    return (
        <html lang="en">
            <body>
                <div
                    className="background"
                    style={{
                    backgroundImage: `url(${basePath}/MainBackground.png)`,
                    }}
                >
                    {children}
                </div>
            </body>
        </html>
    );
}