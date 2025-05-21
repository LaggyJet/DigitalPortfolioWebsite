'use client';

import { useEffect } from 'react';

export function ButtonAnimationDelay() {
    useEffect(() => {
        const buttons = document.querySelectorAll('.buttonRow > .button');
        buttons.forEach((btn, i) => {
        const element = btn as HTMLElement;
        element.style.animationDelay = `${1.0 + 0.3 * i}s`;
        });
    }, []);
    return null;
}

export function formatTitleFromPath(path: string): string {
    if (path === '/' || path === '') return 'Home';
    if (path.endsWith('/')) path = path.slice(0, -1);
    const parts = path.split('/');
    const lastSegment = parts[parts.length - 1];
    return lastSegment
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
