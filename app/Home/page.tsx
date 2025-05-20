'use client';

import { useRouter } from 'next/navigation';
import { RightArrow, DocumentIcon } from '../Icons/icons';

export default function HomePage() {
    const router = useRouter();
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    const buttons = [
        { label: 'Skills/Experience', href: '/Skills-Experience', icon: <RightArrow /> },
        { label: 'Projects', href: '/Projects', icon: <RightArrow /> },
        { label: 'Contact', href: '/Contact', icon: <RightArrow /> },
        {
            label: 'Download Resume',
            href: `${basePath}/JF-Resume.pdf`,
            icon: <DocumentIcon />,
            download: true,
        },
    ];
    return (
        <div className="container">
            <h1 className="title">Joshua Furber</h1>
            <p className="description">
                I am a Simulation and Visualization student at Full Sail University.
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
                            <span className="label">{label}</span>
                            {icon}
                        </a>
                    ) : (
                        <button
                            key={label}
                            className="button"
                            onClick={() => router.push(href)}
                        >
                            <span className="label">{label}</span>
                            {icon}
                        </button>
                    )
                )}
            </div>
        </div>
    );
}
