'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { HamburgerIcon, DownArrow, LeftArrow } from '../Shared/icons';
import styles from './HamburgerMenu.module.css';

interface HamburgerMenuProps {
    className?: string;
}

type ProjectData = {
    tags: string[];
    mainFocus: string;
};

export default function HamburgerMenu({ className }: HamburgerMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const [projectSubLinks, setProjectSubLinks] = useState<{ label: string; path: string }[]>([]);
    const menuRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const pathname = usePathname();
    const navLinks = [
        { label: 'Home', path: '/' },
        { label: 'Skills & Experience', path: '/Skills-Experience' },
        { label: 'Projects', path: '/Projects' },
        { label: 'Contact', path: '/Contact' },
    ];
    useEffect(() => {
        fetch('/data/projects-data.json')
        .then(res => (res.ok ? res.json() : Promise.reject('Invalid response')))
        .then((data: Record<string, ProjectData>) => {
            setProjectSubLinks(
            Object.keys(data).map(folder => ({
                label: folder.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
                path: `/Projects/${folder}`,
            }))
            );
        })
        .catch(console.error);
    }, []);
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as Node;
        if (isOpen && menuRef.current && !menuRef.current.contains(target)) {
            setIsOpen(false);
            setShowProjects(false);
        }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);
    const handleNavClick = useCallback(
        (path: string) => {
        router.push(path);
        setIsOpen(false);
        setShowProjects(false);
        },
        [router]
    );
    const handleProjectsClick = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
        const label = e.currentTarget.querySelector(`.${styles.linkLabel}`) as HTMLElement;
        if (!label) return;
        const rect = label.getBoundingClientRect();
        const x = e.clientX;
        const y = e.clientY;
        const tolerance = 10;
        const insideLabel =
            x >= rect.left - tolerance &&
            x <= rect.right + tolerance &&
            y >= rect.top - tolerance &&
            y <= rect.bottom + tolerance;

        if (insideLabel) {
            handleNavClick('/Projects');
        } else {
            setShowProjects(v => !v);
        }
        },
        [handleNavClick]
    );
    return (
        <header className={styles.header}>
            <div ref={menuRef} className={styles.wrapper}>
                <button
                    onClick={() => setIsOpen(v => !v)}
                    className={styles.iconButton}
                    aria-label="Toggle navigation menu"
                    >
                    <HamburgerIcon className={styles.icon} />
                </button>
                <nav className={`${styles.menu} ${isOpen ? styles.open : ''}`} aria-hidden={!isOpen}>
                    <div className={styles.linksContainer}>
                        {navLinks.map(({ label, path }) => {
                        const isProjects = label === 'Projects';
                        const isActive =
                            path === '/Projects'
                            ? pathname.toLowerCase().startsWith('/projects')
                            : pathname === path;
                        if (isProjects) {
                            return (
                                <div key={path} className={styles.projectsWrapper}>
                                    <button
                                        className={`${styles.link} ${isActive ? styles.active : ''}`}
                                        onClick={handleProjectsClick}
                                        aria-expanded={showProjects}
                                        aria-controls="projects-submenu"
                                        >
                                        <span className={styles.linkLabel}>{label}</span>
                                        <span>
                                            {showProjects ? (
                                            <DownArrow className={styles.arrow} />
                                            ) : (
                                            <LeftArrow className={styles.arrow} />
                                            )}
                                        </span>
                                    </button>
                                    <div
                                        id="projects-submenu"
                                        className={`${styles.submenu} ${showProjects ? styles.submenuOpen : ''}`}
                                        >
                                        <div className={styles.submenuInner}>
                                            {projectSubLinks.map(({ label, path }) => (
                                            <button
                                                key={path}
                                                className={styles.sublink}
                                                onClick={() => handleNavClick(path)}
                                                disabled={!showProjects}
                                            >
                                                {label}
                                            </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        return (
                            <button
                            key={path}
                            className={`${styles.link} ${isActive ? styles.active : ''}`}
                            onClick={() => handleNavClick(path)}
                            >
                            {label}
                            </button>
                        );
                        })}
                    </div>
                    <div className={styles.resumeSection}>
                        <a href="/Resume" className={styles.resumeButton}>
                            View Resume
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}