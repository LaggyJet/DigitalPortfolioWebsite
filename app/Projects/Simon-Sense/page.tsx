'use client';

import BaseProjectPage from "../../Components/BaseProject";

export default function SimonSensePage() {
    return (
        <BaseProjectPage
            title="Simon Sense"
            videoEmbed={
                <div className="responsive-iframe-wrapper">
                    <iframe
                        src="https://drive.google.com/file/d/1VKkgPHFT4od8chGb4CPxa9x4wWkbHisf/preview"
                        allow="encryped-media"
                        allowFullScreen
                        title="Simon Sense Intro Use Video"
                        loading="lazy"
                        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    />
                </div>
            }
            descriptions={[
                "Developed Simon Sense, a physical “Simon Says” memory game that uses gesture-based input by covering clear LEDs instead of pressing buttons.",
                "Paired each RGBY output LED with a clear LED that detects when it is covered, enabling intuitive, touchless interaction.",
                "Implemented automatic ambient light calibration to adapt sensor thresholds to current room lighting for input detection.",
                "Designed a custom PCB in Eagle to manage LED control, light detection, and audio output in a compact layout.",
                "Integrated a speaker to provide sound feedback during gameplay, enhancing user engagement and timing cues.",
                "Wrote Arduino firmware to handle input sensing, LED animations, game logic, and synchronized audio playback.",
                <a
                    href="https://github.com/LaggyJet/SimonSense"
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Check The Repo
                </a>
            ]}
            galleryImages={[
                "PCBDesign.png",
                "TopDown.png"
            ]}
        />
    );
}