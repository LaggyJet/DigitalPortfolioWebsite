'use client';

import { usePathname } from "next/navigation";
import { JSX, ReactNode } from "react";

type BaseProjectPageProps = {
    title: string;
    mainImage?: string;
    videoEmbed?: ReactNode;
    descriptions: (string | ReactNode)[];
    galleryImages: string[];
}

export default function BaseProjectPage({ title, mainImage, videoEmbed, descriptions, galleryImages }: BaseProjectPageProps): JSX.Element {
    const pathname = usePathname();
    return (
        <div className="container">
            <h1 className="title" style={{ textDecoration: 'underline' }}>{title}</h1>

            {/* Main video has priority */}
            {videoEmbed ? (videoEmbed) :
                mainImage ? (
                <img
                    className="mainImage"
                    src={`${pathname}/${mainImage}`}
                    loading="lazy"
                    alt={title}
                />
            ) : null}

            {/* Project Descrition List */}
            <ul className="list">
                {descriptions.map((item, i) => (
                    <li key={i}>
                        {typeof item === "string" ? item : item}
                    </li>
                ))}
            </ul>

            {/* Project Gallery */}
            <h1 className="title" style={{ textDecoration: 'underline' }}>
                {galleryImages.length == 0 ? "Gallery In Progress" : "Gallery"}
            </h1>
            <div className="galleryGrid">
                {galleryImages.map((filename, i) => (
                    <img
                        key={i}
                        src={`${pathname}/${filename}`}
                        alt={`Image ${i + 1}`}
                        className="galleryImage"
                        loading="lazy"
                    />
                ))}
            </div>
        </div>
    );
}