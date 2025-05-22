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
        src="/logos/FSFlightSim.png"
        alt="FS Flight Sim Logo"
        width={size}
        height={size}
        className={className || 'icon'}
    />
);

export const DTDragonsLogo: React.FC<LogoProps> = ({ className }) => (
    <img
        src="/logos/DTDragons.png"
        alt="DT Dragons Logo"
        width={size}
        height={size}
        className={className || 'icon'}
    />
);

export const SensoryPanelsLogo: React.FC<LogoProps> = ({ className }) => (
    <img
        src="/logos/SensoryPanels.png"
        alt="Sensory Panels Logo"
        width={size}
        height={size}
        className={className || 'icon'}
    />
);
