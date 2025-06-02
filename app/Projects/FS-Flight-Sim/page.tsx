'use client';

export default function FSFlightSimPage() {
    return (
        <div className="container">
            <h1 className="title" style={{ textDecoration: 'underline' }}>FS Flight Sim</h1>
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
                <li>Custom MH-6 Little Bird game where you can fly around on different modes</li>
                <li>Supports Mouse+Keyboard, Xbox, and Joystick inputs</li>
                <li>Custom Scoring Logic based off time during course and accuracy on the landing pad</li>
                <li>Connected custom made motion platform via bluetooth to have similar movements to the helicopter ingame</li>
                <li>
                    <a
                        href="https://github.com/LaggyJet/FS-FlightSim"
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