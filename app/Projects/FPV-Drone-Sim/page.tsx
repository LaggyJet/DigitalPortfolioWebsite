'use client';

import BaseProjectPage from "../../Components/BaseProject";

export default function FPVDroneSimPage() {
    return (
        <BaseProjectPage
            title="FPV Drone Simulator"
            descriptions={[
                "Designed and built a drone simulation in Unreal Engine for real-time LiDAR scanning at dynamic points of interest.",
                "Implemented scan data export for external visualization of 3D-mapped environments post-flight.",
                "Team earned $15,000 prize.",
                <a
                    href="https://github.com/LaggyJet/FPV-DroneSim"
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Check The Repo
                </a>
            ]}
            galleryImages={[]}
        />
    );
}