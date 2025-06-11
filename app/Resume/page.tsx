'use client';

export default function ContactPage() {
    return (
        <div className="container">
            <h1 className="title mt-4">
                <a
                className="button"
                href="/JF-Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                >
                Download Resume
                </a>
            </h1>
            <object
                data="/JF-Resume.pdf"
                type="application/pdf"
                width="100%"
                height="800px"
            >
                <p>
                Your browser does not support embedded PDFs. You can{' '}
                <a href="/JF-Resume.pdf" download>
                    download the resume here.
                </a>
                </p>
            </object>
        </div>
    );
}