'use client';

import BaseProjectPage from "../../Components/BaseProject";

export default function ESPGeoCachePage() {
    return (
        <BaseProjectPage
            title="ESP GeoCache"
            descriptions={[
                "Custom made GeoCache arduino that lets you use Latitude and Longitude to guide you",
                "Soldered GeoCache modules together",
                "Read in data packets from GPS module and parse data",
                <a
                    href="https://github.com/LaggyJet/ESPGeoCache"
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Check The Repo
                </a>
            ]}
            galleryImages={[
                "CloseScreen.png"
            ]}
        />
    );
}