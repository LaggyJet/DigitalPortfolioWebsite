'use client';

export default function ESPGeoCachePage() {
    return (
        <div className="container">
            <h1 className="title" style={{ textDecoration: 'underline' }}>ESP GeoCache</h1>
            {// Make sure to fill with actual vid
            <p className="description" style={{ textDecoration: 'underline' }}>Video Coming Soon</p>
            /* <div className="responsive-iframe-wrapper">
                <iframe
                    src="https://drive.google.com/file/d/1XCC311gdZKthu9LPcfaamjuV17aUrONC/preview"
                    allow="encrypted-media"
                    allowFullScreen
                />
            </div> */}
            <ul className="list">
                <li>Custom made GeoCache arduino that lets you use Latitude and Longitude to guide you</li>
                <li>Soldered GeoCache modules together</li>
                <li>Read in data packets from GPS module and parse data</li>
                <li>
                    <a
                        href="https://github.com/LaggyJet/ESPGeoCache"
                        className="link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Check The Repo
                    </a>
                </li>
            </ul>
        </div>
    );
}