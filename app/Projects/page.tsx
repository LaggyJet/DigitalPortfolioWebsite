'use client';

import { useRouter } from 'next/navigation';
import { LeftArrow, RightArrow } from '../Shared/icons';
import { DTDragonsLogo, FSFlightSimLogo, SensoryPanelLogo, TheGrittyLogo } from '../Shared/logos';

export default function ProjectsPage() {
    const router = useRouter();
    const buttons = [
        { label: 'The Gritty', href: '/Projects/TheGritty', logo: <TheGrittyLogo />, icon: <RightArrow /> },
        { label: 'FS - Flight Sim', href: '/Projects/FS-FlightSim', logo: <FSFlightSimLogo />, icon: <RightArrow /> },
        { label: 'DT Dragons', href: '/Projects/DTDragons', logo: <DTDragonsLogo />, icon: <RightArrow /> },
        { label: 'Sensory Panels', href: '/Projects/SensoryPanels', logo: <SensoryPanelLogo />, icon: <RightArrow /> },
    ];
    return (
        <div className="container">
            <button className="backButton" onClick={() => router.back()}>
                <LeftArrow />
                Back
            </button>
            <h1 className="title">Projects</h1>
            <div className="buttonRow">
                {buttons.map(({ label, href, logo, icon }) =>
                (
                    <button key={label}
                        className="button"
                        onClick={() => router.push(href)}
                    >
                        <span className="label">{label}</span>
                        {logo}
                        {icon}
                    </button>
                )
                )}
            </div>
        </div>
    );
}