'use client';

import React from 'react';

interface LogoProps {
    className?: string;
}

const size = 32;

const LogoImage: React.FC<{ src: string; alt: string } & LogoProps> = ({ src, alt, className }) => (
    <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        className={className || 'icon'}
    />
);

export const DTDragonsLogo = (props: LogoProps) => <LogoImage src="/logos/DTDragons.png" alt="DT Dragons Logo" {...props} />;
export const StewartPlatformLogo = (props: LogoProps) => <LogoImage src="/logos/StewartPlatform.png" alt="Stewart Platform Logo" {...props} />;
export const TheGrittyLogo = (props: LogoProps) => <LogoImage src="/logos/TheGritty.png" alt="The Gritty Logo" {...props} />;
export const ActionFlightSimLogo = (props: LogoProps) => <LogoImage src="/logos/ActionFlightSim.png" alt="Action Flight Sim Logo" {...props} />;
export const ArborSensoryPanelsLogo = (props: LogoProps) => <LogoImage src="/logos/ArborSensoryPanels.png" alt="Arbor Sensory Panels Logo" {...props} />;
export const SimonSenseLogo = (props: LogoProps) => <LogoImage src="/logos/SimonSense.png" alt="Simon Sense Logo" {...props} />;
export const ESPGeoCacheLogo = (props: LogoProps) => <LogoImage src="/logos/ESPGeoCache.png" alt="ESP GeoCache Logo" {...props} />;
export const MotionBaseShuttleSimulatorLogo = (props: LogoProps) => <LogoImage src="/logos/MotionBaseShuttleSimulator.png" alt="Motion Base Shuttle Simulator" {...props} />;
export const DataVisualizerLogo = (props: LogoProps) => <LogoImage src="/logos/DataVisualizer.png" alt="Data Visualizer" {...props} />;
export const FPVDroneSimLogo = (props: LogoProps) => <LogoImage src="/logos/FPVDroneSim.png" alt="FPV Drone Simulator" {...props} />;
export const TCPMessagingAppLogo = (props: LogoProps) => <LogoImage src="/logos/TCPMessagingApp.png" alt="TCP Messaging App" {...props} />;