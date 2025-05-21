'use client';

import { useRouter } from 'next/navigation';
import styles from './Header.module.css';
import { LeftArrow } from '../Shared/icons';

export default function Header() {
    const router = useRouter();
    return (
        <header className={styles.header}>
            <button className="button back" onClick={() => router.back()}>
                <LeftArrow />
                Back
            </button>
            <div className={styles.navContent}>
                <button className="button" onClick={() => router.push('/')}>
                Home
                </button>
                <button className="button" onClick={() => router.push('/Skills-Experience')}>
                Skills/Experience
                </button>
                <button className="button" onClick={() => router.push('/Projects')}>
                Projects
                </button>
                <button className="button" onClick={() => router.push('/Contact')}>
                Contact
                </button>
            </div>
        </header>
    );
}
