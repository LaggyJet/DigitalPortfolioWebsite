'use client';

import { useRouter, usePathname } from 'next/navigation';
import styles from './Header.module.css';
import Hamburger from './Hamburger';

export default function Header() {
    const router = useRouter();
    const pathname = usePathname();
    const navLinks = [
        { label: 'Home', path: '/' },
        { label: 'Skills & Experience', path: '/Skills-Experience' },
        { label: 'Projects', path: '/Projects' },
        { label: 'Contact', path: '/Contact' },
    ];
    return (
        <header className={styles.header}>
            <Hamburger />
            <nav className={styles.navContent}>
                {navLinks.map(({ label, path }) => {
                    const isActive =
                        path === '/Projects'
                            ? pathname.toLowerCase().startsWith('/projects')
                            : pathname === path;

                    return (
                        <button
                            key={path}
                            className={`button ${isActive ? 'active' : ''}`}
                            onClick={() => router.push(path)}
                        >
                            {label}
                        </button>
                    );
                })}
            </nav>
        </header>
    );
}
