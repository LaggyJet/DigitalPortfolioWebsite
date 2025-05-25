'use client';

import Image from "next/image";

export default function StewartPlatformPage() {
    return (
        <div className="container">
            <h1 className="title" style={{ textDecoration: 'underline' }}>Stewart Platform</h1>
            <div className="responsive-iframe-wrapper">
                <iframe
                    src="https://drive.google.com/file/d/1xu2SB3LwS-uU6-5gTOTYyoyaxYttQ502/preview"
                    allow="encrypted-media"
                    allowFullScreen
                />
            </div>
            <br></br>
            <ul className="list">
                <li>Designed a fully custom 6-degree-of-freedom (6-DoF) Stewart platform motion simulator integrating mechanical design, electronics, and wireless control.</li>
                <li>Modeled all mechanical parts in SolidWorks before fabrication to verify movement and ensure precise measurements.</li>
                <li>Assembled the full SolidWorks model to check part interactions and prepare position data for Arduino control.</li>
                <li>Designed a custom PCB in Eagle specifically for servo control and communication.</li>
                <li>Hand-soldered and assembled the PCB components for the control system.</li>
                <li>Implemented Bluetooth communication for wireless control. See the FS FlightSim project for detailed integration.</li>
                <li>
                    <a href="https://github.com/LaggyJet/" className="link">
                        Check The Repo (Not currently Available)
                    </a>
                </li>
            </ul>
        </div>
    );
}
