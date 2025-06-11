'use client';

import { useRouter } from 'next/navigation';
import { RightArrow } from './Shared/icons';
import { useCallback, useMemo } from 'react';

export default function HomePage() {
    const router = useRouter();
    const buttons = useMemo(() => [
        { label: 'Skills & Experience', href: '/Skills-Experience' },
        { label: 'Projects', href: '/Projects' },
        { label: 'Contact', href: '/Contact' },
        { label: 'View Resume', href: '/Resume' },
    ], []);
    const handleClick = useCallback((href: string) => {
        router.push(href);
    }, [router]);
    return (
        <div className="container">
            <h1 className="title">Joshua Furber</h1>
            <p className="description">
                Simulation and Visualization Developer
            </p>
            <p className="description">
                I combine deep knowledge of simulation and visualization software with practical experience in mechanical design and fabrication to deliver advanced training simulators and interactive platforms. By crafting custom hardware interfaces and controllers, I enhance user immersion and the overall realism of each project.
            </p>
            <p className="description" style={{ color: 'orange', fontWeight: 'bold', textDecoration: 'underline' }}>
                Note: This website is still actively being worked on
            </p>
            <p className="description" style={{ fontSize: '0.85em' }}>
                Some icons courtesy of{' '}
                <a
                    href="https://www.flaticon.com/authors/freepik"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Freepik
                    </a>{' '}
                    from{' '}
                    <a
                    href="https://www.flaticon.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Flaticon
                </a>
            </p>
            <div className="buttonRow">
                {buttons.map(({ label, href }) => (
                <button
                    key={href}
                    className="button"
                    onClick={() => handleClick(href)}
                    aria-label={`Navigate to ${label}`}
                >
                    {label}
                    <RightArrow />
                </button>
                ))}
            </div>
        </div>
    );
}
