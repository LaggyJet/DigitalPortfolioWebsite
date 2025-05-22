'use client';

import { useRouter } from 'next/navigation';
import { RightArrow, DocumentIcon } from './Shared/icons';

export default function HomePage() {
    const router = useRouter();
    const buttons = [
        { label: 'Skills & Experience', href: '/Skills-Experience', icon: <RightArrow /> },
        { label: 'Projects', href: '/Projects', icon: <RightArrow /> },
        { label: 'Contact', href: '/Contact', icon: <RightArrow /> },
        {
            label: 'Download Resume',
            href: '/JF-Resume.pdf',
            icon: <DocumentIcon />,
            download: true,
        },
    ];
    return (
        <div className="container">
            <h1 className="title">Joshua Furber</h1>
            <p className="description">
                Simulation and Visualization Engineering
            </p>
            <p className="description">
                Raised in Florida, I've been fascinated by technology since high school, when I first started programming.
            </p>
            <p className="description">
                I'm building a career in simulation and robotics, aiming to create practical, innovative solutions.
            </p>
            <p className="description">
                Feel free to explore my work.
            </p>
            <div className="buttonRow">
                {buttons.map(({ label, href, icon, download }) =>
                    download ? (
                        <a
                            key={label}
                            href={href}
                            download
                            className="button"
                        >
                            {label}
                            {icon}
                        </a>
                    ) : (
                        <button
                            key={label}
                            className="button"
                            onClick={() => router.push(href)}
                        >
                            {label}
                            {icon}
                        </button>
                    )
                )}
            </div>
        </div>
    );
}
