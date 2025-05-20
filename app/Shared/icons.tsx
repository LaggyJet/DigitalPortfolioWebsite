'use client';

import styles from './icons.module.css';

interface IconProps {
    className?: string;
}

export const RightArrow = ({ className }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        className={className || styles.icon}
    >
        <path d="M9 18l6-6-6-6" />
    </svg>
);

export const LeftArrow = ({ className }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        className={className || styles.icon}
    >
        <path d="M15 18l-6-6 6-6" />
    </svg>
);

export const DocumentIcon = ({ className }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        className={className || styles.icon}
    >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
    </svg>
);

export const GitHubIcon = ({ className }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className || styles.icon}
    >
        <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.43c.6.11.82-.26.82-.58v-2.01c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.21.09 1.85 1.24 1.85 1.24 1.08 1.84 2.83 1.31 3.52 1.01.11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.91 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.51.12-3.16 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0C16.7 4.49 17.7 4.8 17.7 4.8c.66 1.65.24 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.59-2.81 5.61-5.49 5.91.43.37.81 1.1.81 2.23v3.3c0 .32.22.69.83.57A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
);

export const LinkedInIcon = ({ className }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className || styles.icon}
    >
        <path d="M4.98 3.5a2.5 2.5 0 11-.01 5.01 2.5 2.5 0 01.01-5.01zM2 9h6v12H2zM9.5 9h5.25v1.64h.08c.73-1.31 2.51-2.7 5.17-2.7C23.5 7.94 24 11 24 14.88V21H18v-5.25c0-1.25-.02-2.88-1.75-2.88s-2 1.38-2 2.81V21H9.5z" />
    </svg>
);