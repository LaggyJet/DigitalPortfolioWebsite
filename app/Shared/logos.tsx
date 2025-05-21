'use client';

import React from 'react';

interface LogoProps {
    className?: string;
}

const size = 32;

export const TheGrittyLogo: React.FC<LogoProps> = ({ className }) => (
    <img
        src="/logos/TheGritty.png"
        alt="The Gritty Logo"
        width={size}
        height={size}
        className={className || 'icon'}
    />
);

export const FSFlightSimLogo: React.FC<LogoProps> = ({ className }) => (
    <img
        src="/logos/fsflightsim.svg"
        alt="FS Flight Sim Logo"
        width={size}
        height={size}
        className={className || 'icon'}
    />
);

export const DTDragonsLogo: React.FC<LogoProps> = ({ className }) => (
    <img
        src="/logos/dtdragons.svg"
        alt="DT Dragons Logo"
        width={size}
        height={size}
        className={className || 'icon'}
    />
);

export const SensoryPanelLogo: React.FC<LogoProps> = ({ className }) => (
    <img
        src="/logos/sensorypanel.svg"
        alt="Sensory Panel Logo"
        width={size}
        height={size}
        className={className || 'icon'}
    />
);
