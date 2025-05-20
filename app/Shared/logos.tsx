'use client';

import styles from './logos.module.css';

interface LogoProps {
    className?: string;
}

const size = 32;

export const TheGrittyLogo = ({ className }: LogoProps) => (
    <img src="/logos/TheGritty.png" alt="The Gritty Logo" width={size} height={size} className={className} />
);

export const FSFlightSimLogo = ({ className }: LogoProps) => (
    <img src="/logos/fsflightsim.svg" alt="FS Flight Sim Logo" width={size} height={size} className={className} />
);

export const DTDragonsLogo = ({ className }: LogoProps) => (
    <img src="/logos/dtdragons.svg" alt="DT Dragons Logo" width={size} height={size} className={className} />
);

export const SensoryPanelLogo = ({ className }: LogoProps) => (
    <img src="/logos/sensorypanel.svg" alt="Sensory Panel Logo" width={size} height={size} className={className} />
);
