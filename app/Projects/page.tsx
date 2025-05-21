'use client';

import type { JSX } from 'react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { RightArrow } from '../Shared/icons';
import { DTDragonsLogo, FSFlightSimLogo, SensoryPanelLogo, TheGrittyLogo } from '../Shared/logos';

const logoMap: Record<string, JSX.Element> = {
    'The-Gritty': <TheGrittyLogo />,
    'FS-FlightSim': <FSFlightSimLogo />,
    'DT-Dragons': <DTDragonsLogo />,
    'Sensory-Panels': <SensoryPanelLogo />,
};

export default function ProjectsPage() {
    const router = useRouter();
    const [projects, setProjects] = useState<string[]>([]);
    useEffect(() => {
        async function fetchProjects() {
        try {
            const res = await fetch('/api/projects');
            const folders: string[] = await res.json();
            setProjects(folders);
        } catch (error) {
            console.error('Failed to load projects:', error);
        }
        }
        fetchProjects();
    }, []);
    return (
        <div className="container">
        <h1 className="title">Projects</h1>
        <div className="buttonRow">
            {projects.map((folder) => {
            const label = folder.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
            const href = `/Projects/${folder}`;
            const logo = logoMap[folder] || null;
            return (
                <button key={folder} className="button" onClick={() => router.push(href)}>
                <span className="label">{label}</span>
                {logo}
                <RightArrow />
                </button>
            );
            })}
        </div>
        </div>
    );
}
