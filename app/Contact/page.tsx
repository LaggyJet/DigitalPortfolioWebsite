'use client';

import styles from './contact.module.css';
import { GitHubIcon, LinkedInIcon } from '../Shared/icons';

export default function ContactPage() {
    return (
        <div className="container">
            <h1 className="title">Contact</h1>
            <p className="description">
                Feel free to reach out at my{' '}
                <a href="mailto:jfurber404@gmail.com" className="link">
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
                    aria-label="GitHub"
                    >
                    <GitHubIcon className={styles.giticon} />
                </a>
                <a
                    href="https://www.linkedin.com/in/joshua-furber/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.iconWrapper}
                    aria-label="LinkedIn"
                    >
                    <LinkedInIcon className={styles.linkicon} />
                </a>
            </div>
        </div>
    );
}