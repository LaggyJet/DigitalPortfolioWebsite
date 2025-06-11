'use client';

import { useRouter, usePathname } from 'next/navigation';
import styles from './Header.module.css';
import HamburgerMenu from './HamburgerMenu';
import { useCallback, useMemo } from 'react';

export default function Header() {
    const router = useRouter();
    const pathname = usePathname();
    const navLinks = useMemo(() => [
        { label: 'Home', path: '/' },
        { label: 'Skills & Experience', path: '/Skills-Experience' },
        { label: 'Projects', path: '/Projects' },
        { label: 'Contact', path: '/Contact' },
    ], []);
    const handleClick = useCallback((path: string) => {
        router.push(path);
    }, [router]);
    return (
        <header className={styles.header}>
            <HamburgerMenu className={styles.hamburgerOnly} />
            <nav className={styles.navContent} aria-label="Primary navigation">
                {navLinks.map(({ label, path }) => {
                const isActive =
                    path === '/Projects'
                    ? pathname.toLowerCase().startsWith('/projects')
                    : pathname === path;
                return (
                    <button
                    key={path}
                    className={`button ${isActive ? styles.active : ''}`}
                    onClick={() => handleClick(path)}
                    aria-current={isActive ? 'page' : undefined}
                    >
                    {label}
                    </button>
                );
                })}
            </nav>
        </header>
    );
}