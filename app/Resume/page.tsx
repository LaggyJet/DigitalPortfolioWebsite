'use client';

export default function ContactPage() {
    return (
        <div className="container">
            <h1>
                <a className="button" href="/JF-Resume.pdf" download>
                    My Resume
                </a>
            </h1>
            <embed src="/JF-Resume.pdf" type="application/pdf" width="100%" height="100%" />
        </div>
    );
}