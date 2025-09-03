'use client';

import BaseProjectPage from "../../Components/BaseProject";

export default function ActionFlightSimPage() {
    return (
        <BaseProjectPage
            title="Action Flight Sim"
            videoEmbed={
                <div className="responsive-iframe-wrapper">
                    <iframe
                        src="https://drive.google.com/file/d/1FpRtns7VUo7y1rhsPQw-F-ST3I85zSFt/preview"
                        allow="encrypted-media"
                        allowFullScreen
                        title="Action Flight Sim Motion Platform Demo"
                        loading="lazy"
                        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    />
                </div>
            }
            descriptions={[
                "Custom MH-6 Little Bird game where you can fly around on different modes",
                "Supports Mouse+Keyboard, Xbox, and Joystick inputs",
                "Custom Scoring Logic based off time during course and accuracy on the landing pad",
                "Connected custom made motion platform via bluetooth to have similar movements to the helicopter ingame",
                <a
                    href="https://github.com/LaggyJet/Action-Flight-Sim"
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Check The Repo
                </a>
            ]}
            galleryImages={[
                
            ]}
        />
    );
}