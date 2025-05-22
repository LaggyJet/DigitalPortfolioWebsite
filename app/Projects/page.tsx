'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { RightArrow } from '../Shared/icons';
import type { JSX } from 'react';

export default function ProjectsPage() {
    const router = useRouter();
    const [projects, setProjects] = useState<string[]>([]);
    const [logoMap, setLogoMap] = useState<Record<string, JSX.Element>>({});
    useEffect(() => {
        async function fetchProjects() {
            try {
                const res = await fetch('/api/projects');
                const folders: string[] = await res.json();
                setProjects(folders);
                const logosModule = await import('../Shared/logos');
                const loadedLogos: Record<string, JSX.Element> = {};
                for (const folder of folders) {
                    const exportName =
                        folder.replace(/-/g, '').replace(/^\w/, c => c.toUpperCase()) + 'Logo';
                    const LogoComponent = logosModule[exportName];
                    if (LogoComponent) {
                        loadedLogos[folder] = <LogoComponent />;
                    } else {
                        console.warn(`No logo found for folder "${folder}" as "${exportName}"`);
                    }
                }
                setLogoMap(loadedLogos);
            } catch (error) {
                console.error('Failed to load projects or logos:', error);
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
