'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { HamburgerIcon, DownArrow, LeftArrow } from '../Shared/icons';
import styles from './HamburgerMenu.module.css';

interface HamburgerMenuProps {
    className?: string;
}

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
        fetch('/api/projects')
            .then(res => res.json())
            .then((data: Record<string, string[][]>) => {
                const folders = Object.keys(data);
                setProjectSubLinks(
                    folders.map(folder => ({
                        label: folder.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
                        path: `/Projects/${folder}`,
                    }))
                );
            })
            .catch(err => {
                console.error('Failed to load project list', err);
            });
    }, []);
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (isOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setIsOpen(false);
                setShowProjects(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);
    const toggleMenu = () => setIsOpen(v => !v);
    const toggleProjects = () => setShowProjects(v => !v);
    return (
        <header className={styles.header}>
            <div ref={menuRef} className={styles.wrapper}>
                <button onClick={toggleMenu} className={styles.iconButton}>
                    <HamburgerIcon className={styles.icon} />
                </button>
                <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
                    <div className={styles.linksContainer}>
                        {navLinks.map(({ label, path }) => {
                            const isProjects = label === 'Projects';
                            const isActive = path === '/Projects'
                                ? pathname.toLowerCase().startsWith('/projects')
                                : pathname === path;
                            if (isProjects) {
                                return (
                                    <div key={path} className={styles.projectsWrapper}>
                                        <button
                                            className={`${styles.link} ${isActive ? styles.active : ''}`}
                                            onClick={e => {
                                                const labelSpan = e.currentTarget.querySelector(`.${styles.linkLabel}`) as HTMLElement;
                                                const bounds = labelSpan?.getBoundingClientRect();
                                                const tolerance = 10;
                                                const isOnLabel =
                                                    bounds &&
                                                    e.clientX >= bounds.left - tolerance &&
                                                    e.clientX <= bounds.right + tolerance &&
                                                    e.clientY >= bounds.top - tolerance &&
                                                    e.clientY <= bounds.bottom + tolerance;
                                                if (isOnLabel) {
                                                    router.push(path);
                                                    setIsOpen(false);
                                                    setShowProjects(false);
                                                } else {
                                                    toggleProjects();
                                                }
                                            }}
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
                                        <div className={`${styles.submenu} ${showProjects ? styles.submenuOpen : ''}`}>
                                            <div className={styles.submenuInner}>
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
                                        </div>
                                    </div>
                                );
                            }
                            return (
                                <button
                                    key={path}
                                    className={`${styles.link} ${isActive ? styles.active : ''}`}
                                    onClick={() => {
                                        router.push(path);
                                        setIsOpen(false);
                                        setShowProjects(false);
                                    }}
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
                </div>
            </div>
        </header>
    );
}