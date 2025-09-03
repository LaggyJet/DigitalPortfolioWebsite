'use client';

import BaseProjectPage from "../../Components/BaseProject";

export default function ArborSensoryPanelsPage() {
    return (
        <BaseProjectPage
            title="Arbor Sensory Panels"
            mainImage="Final.png"
            descriptions={[
                "A fully custom designed Sensory Panel for Neurodivergent kids.",
                "Designed a custom Arduino Library for other panels to share settings each other.",
                "Fabricated a generic Eagle PCB board to be used by future students.",
                "Created the base panel box shape, along with the specific cover for the Backlit Panel.",
                "Made a Unity App that lets you set settings and users for the panels to use.",
                <a
                    href="https://github.com/LaggyJet/SensoryPanel"
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Check The Repo
                </a>
            ]}
            galleryImages={[
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
            ]}
        />
    );
}