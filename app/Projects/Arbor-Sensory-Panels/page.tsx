'use client';

import { usePathname } from 'next/navigation';

const mainFile = "Final.png";
const imageFiles = [
    "PhysicalCoverLEDs.png",
    "PhysicalSemiFinal.png", 
    "PhysicalMainSolder.png",
    "PCBDesign.png",
    "SWMiddleUnder.png",
    "SWBatteryClip.png",    
    "SWTopUnderside.png",
    "SWTopDownBase.png",
    "UnityMain.png",
    "UnitySettings.png",
    "UnityAddUser.png",
    "UnityUsers.png"
];

export default function ArborSensoryPanelsPage() {
    const pathname = usePathname();
    return (
        <div className="container">
            <h1 className="title" style={{ textDecoration: 'underline' }}>Arbor Sensory Panels</h1>
            <img
                className="mainImage"
                src={`${pathname}/${mainFile}`}
                loading="lazy"
            />
            <ul className="list">
                <li>A fully custom designed Sensory Panel for Neurodivergent kids.</li>
                <li>Designed a custom Arduino Library for other panels to share settings each other.</li>
                <li>Fabricated a generic Eagle PCB board to be used by future students.</li>
                <li>Created the base panel box shape, along with the specific cover for the Backlit Panel.</li>
                <li>Made a Unity App that lets you set settings and users for the panels to use.</li>
                <li>
                    <a
                        href="https://github.com/LaggyJet/SensoryPanel"
                        className="link"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Check The Repo
                    </a>
                </li>
            </ul>
            <h1 className="title" style={{ textDecoration: 'underline' }}>Gallery</h1>
            <div className="galleryGrid">
                {imageFiles.map((filename, i) => (
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