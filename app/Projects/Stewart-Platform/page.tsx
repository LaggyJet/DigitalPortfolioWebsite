'use client';

import BaseProjectPage from "../../Components/BaseProject";

export default function StewartPlatformPage() {
    return (
        <BaseProjectPage
            title="Stewart Platform"
            videoEmbed={
                <div className="responsive-iframe-wrapper">
                    <iframe
                        src="https://drive.google.com/file/d/1xu2SB3LwS-uU6-5gTOTYyoyaxYttQ502/preview"
                        allow="encrypted-media"
                        allowFullScreen
                        title="Stewart Platform Motion Simulator Video"
                        loading="lazy"
                        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    />
                </div>
            }
            descriptions={[
                "Designed a fully custom 6-degree-of-freedom (6-DoF) Stewart platform motion simulator integrating mechanical design, electronics, and wireless control.",
                "Modeled all mechanical parts in SolidWorks before fabrication to verify movement and ensure precise measurements.",
                "Assembled the full SolidWorks model to check part interactions and prepare position data for Arduino control.",
                "Designed a custom PCB in Eagle specifically for servo control and communication.",
                "Hand-soldered and assembled the PCB components for the control system.",
                "Implemented Bluetooth communication for wireless control. See the Action Flight Sim project for detailed integration.",
                <a
                    href="https://github.com/LaggyJet/StewartPlatform"
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Check The Repo
                </a>
            ]}
            galleryImages={[
                "FinalProduct.png",
                "PartialFinal.png",
                "BottomPlate.png",
                "SWDesign.png",
                "TopPCB.png",
                "BottomPCB.png",
                "PCBDesign.png"
            ]}
        />
    );
}