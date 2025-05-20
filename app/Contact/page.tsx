'use client';

import styles from './contact.module.css';
import { useRouter } from 'next/navigation';
import { LeftArrow, GitHubIcon, LinkedInIcon } from '../Icons/icons';

export default function ContactPage() {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <button className={styles.backButton} onClick={() => router.back()}>
                <LeftArrow />
                Back
            </button>
            <h1 className={styles.title}>Contact</h1>
            <p className={styles.description}>
                Feel free to reach out at my{' '}
                <a href="mailto:jfurber404@gmail.com" className={styles.emailLink}>
                    email
                </a>{' '}
                or my LinkedIn below.
            </p>
            <div className={styles.iconRow}>
                <a
                    href="https://github.com/LaggyJet/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.iconWrapper}
                >
                    <GitHubIcon className={styles.icon} />
                </a>
                <a
                    href="https://www.linkedin.com/in/joshua-furber/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.iconWrapper}
                >
                    <LinkedInIcon className={styles.icon} />
                </a>
            </div>
        </div>
    );
}
