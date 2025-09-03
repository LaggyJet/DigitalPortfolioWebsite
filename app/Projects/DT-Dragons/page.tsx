'use client';

import BaseProjectPage from "../../Components/BaseProject";

export default function DTDragonsPage() {
    return (
        <BaseProjectPage
            title="DT Dragons"
            descriptions={[
                "An Augmented Reality experience built with Unreal Engine where players fight hellhounds and a fire-breathing dragon in their physical space.",
                "Led the team as project manager during the final month, managing five peers, setting deadlines, and coordinating development efforts.",
                "Integrated nav-mesh functionality so enemies could navigate using the player's room scan.",
                "Implemented haptic feedback (audio and vibration) to enhance weapon responsiveness and immersion.",
                "Developed a round-based spawning system for dynamic hellhound encounters.",
                "Built a custom direct-selector allowing players to intuitively grab virtual objects.",
                "Worked on weapon systems and enemy damage logic.",
                "Contributed significantly to bug fixes and quality-of-life improvements across the project.",
                <a
                    href="https://drive.google.com/uc?export=download&id=1X2Oifbh0SUdznJLgcNtaYeFWe0fGSV01"
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download DT Dragons MR Installer (Quest 3/3S)
                </a>,
                <a
                    href="https://github.com/LaggyJet/DT-Dragons-Forked"
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