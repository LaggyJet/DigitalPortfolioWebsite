'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { HamburgerIcon, DownArrow, UpArrow } from '../Shared/icons';
import styles from './Hamburger.module.css';

export default function Hamburger() {
    const [isOpen, setIsOpen] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const [projectSubLinks, setProjectSubLinks] = useState<{ label: string; path: string }[]>([]);
    const router = useRouter();
    const pathname = usePathname();
    const navLinks = [
        { label: 'Home', path: '/' },
        { label: 'Skills & Experience', path: '/Skills-Experience' },
        { label: 'Projects', path: '/Projects' },
        { label: 'Contact', path: '/Contact' },
    ];
    useEffect(() => {
        (async () => {
        try {
            const res = await fetch('/api/projects');
            const folders: string[] = await res.json();
            setProjectSubLinks(
            folders.map(folder => ({
                label: folder.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
                path: `/Projects/${folder}`,
            }))
            );
        } catch (err) {
            console.error('Failed to load project list', err);
        }
        })();
    }, []);
    const toggleMenu = () => setIsOpen(v => !v);
    const toggleProjects = () => setShowProjects(v => !v);
    return (
        <>
        <button onClick={toggleMenu} className={styles.iconButton}>
            <HamburgerIcon className={styles.icon} />
        </button>
        <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
            <div className={styles.linksContainer}>
                {navLinks.map(({ label, path }) => {
                    const isProjects = label === 'Projects';
                    const isActive = path === '/Projects' ? pathname.toLowerCase().startsWith('/projects') : pathname === path;
                    return (
                    <div key={path}>
                        <button
                        className={`${styles.link} ${isActive ? styles.active : ''}`}
                        onClick={() => {
                            if (isProjects) toggleProjects();
                            else {
                            router.push(path);
                            setIsOpen(false);
                            }
                        }}
                        >
                        {label}
                        {isProjects && (showProjects ? <UpArrow className={styles.arrow} /> : <DownArrow className={styles.arrow} />)}
                        </button>
                        {isProjects && (
                        <div className={`${styles.submenu} ${showProjects ? styles.submenuOpen : ''}`}>
                            {projectSubLinks.map(({ label, path }) => (
                            <button
                                key={path}
                                className={styles.sublink}
                                onClick={() => {
                                router.push(path);
                                setIsOpen(false);
                                setShowProjects(false);
                                }}
                                disabled={!showProjects}
                            >
                                {label}
                            </button>
                            ))}
                        </div>
                        )}
                    </div>
                    );
                })}
                </div>
                <div className={styles.resumeSection}>
                <a href="/JF-Resume.pdf" download className={styles.resumeButton}>
                    Download Resume
                </a>
            </div>
        </div>
        </>
    );
}
