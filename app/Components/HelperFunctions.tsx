'use client';

import { useEffect } from 'react';

export function ButtonAnimationDelay() {
    useEffect(() => {
        const rows = document.querySelectorAll<HTMLElement>('.buttonRow');
        for (let i = 0; i < rows.length; i++) {
        const buttons = rows[i].querySelectorAll<HTMLElement>('.button');
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].style.setProperty('animation-delay', `${1 + 0.3 * j}s`);
        }
        }
    }, []);
    return null;
}

export function FormatTitleFromPath(path: string): string {
    if (typeof path !== 'string') return 'Home';
    const clean = path.replace(/\/+$/, '').trim();
    if (!clean || clean === '/') return 'Home';
    const parts = clean.split('/').filter(Boolean);
    const last = parts.pop();
    if (!last) return 'Home';
    return last
        .replace(/[^a-zA-Z0-9-_]/g, '')
        .replace(/[-_]+/g, ' ')
        .split(' ')
        .filter(Boolean)
        .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
        .join(' ');
}
