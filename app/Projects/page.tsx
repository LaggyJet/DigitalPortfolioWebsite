'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { RightArrow } from '../Shared/icons';
import type { JSX } from 'react';

export default function ProjectsPage() {
    const router = useRouter();
    const [projects, setProjects] = useState<string[]>([]);
    const [logoMap, setLogoMap] = useState<Record<string, JSX.Element>>({});
    const [projectTags, setProjectTags] = useState<Record<string, string[]>>({});
    const [availableTags, setAvailableTags] = useState<string[]>([]);
    const [selectedTag, setSelectedTag] = useState<string>('None');
    useEffect(() => {
        async function fetchProjects() {
            try {
                const res = await fetch('/api/projects');
                if (!res.ok) throw new Error('API returned an error');
                const data: Record<string, string[]> = await res.json();
                const names = Object.keys(data);
                const tagsMap: Record<string, string[]> = {};
                const allTags = new Set<string>();
                for (const name of names) {
                    tagsMap[name] = data[name];
                    data[name].forEach(tag => allTags.add(tag));
                }
                setProjects(names);
                setProjectTags(tagsMap);
                setAvailableTags(['None', ...Array.from(allTags).sort()]);
                const logosModule = await import('../Shared/logos');
                const loadedLogos: Record<string, JSX.Element> = {};
                for (const folder of names) {
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
    const filteredProjects = selectedTag === 'None'
        ? projects
        : projects.filter(name => projectTags[name]?.includes(selectedTag));
    return (
        <div className="container">
            <div className="projectsHeader">
                <h1 className="title">Projects</h1>
                <div className="filterWrapper">
                    <label htmlFor="tagFilter" className="filterLabel">Filter by:</label>
                    <select
                        id="tagFilter"
                        className="tagFilterSelect"
                        value={selectedTag}
                        onChange={(e) => setSelectedTag(e.target.value)}
                    >
                        {availableTags.map(tag => (
                            <option key={tag} value={tag}>{tag}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="buttonRow">
                {filteredProjects.map((folder) => {
                    const label = folder.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
                    const href = `/Projects/${folder}`;
                    const logo = logoMap[folder] || null;
                    const isInactive = selectedTag !== "None";
                    return (
                        <button
                            key={folder}
                            className={`button ${isInactive ? 'inactive' : ''}`}
                            onClick={() => router.push(href)}
                        >
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
