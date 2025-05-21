'use client';

import { useRouter, usePathname } from 'next/navigation';
import styles from './Header.module.css';
import HamburgerMenu from './HamburgerMenu';

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
            <HamburgerMenu className={styles.hamburgerOnly} />
            <nav className={styles.navContent}>
                {navLinks.map(({ label, path }) => {
                    const isActive =
                        path === '/Projects'
                            ? pathname.toLowerCase().startsWith('/projects')
                            : pathname === path;
                    return (
                        <button
                            key={path}
                            className={`button ${isActive ? styles.active : ''}`}
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