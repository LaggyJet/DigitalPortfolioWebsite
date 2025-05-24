'use client';

export default function ContactPage() {
    return (
        <div className="container">
            <h1 className="title mt-4">
                <a className="button" href="/JF-Resume.pdf" download>
                    Download Resume
                </a>
            </h1>
            <embed className="pdf-embed" src="/JF-Resume.pdf" type="application/pdf" />
        </div>
    );
}