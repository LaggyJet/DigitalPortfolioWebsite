'use client';

export default function ContactPage() {
    return (
        <div className="container">
            <h1 className="title">My Resume</h1>
            <embed src="/JF-Resume.pdf" type="application/pdf" width="100%" height="600px" />
        </div>
    );
}