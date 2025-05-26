'use client';

export default function SimonSensePage() {
    return (
        <div className="container">
            <h1 className="title" style={{ textDecoration: 'underline' }}>Simon Sense</h1>
            {// Make sure to fill with actual vid
            <p className="description" style={{ textDecoration: 'underline' }}>Video Coming Soon</p>
            /* <div className="responsive-iframe-wrapper">
                <iframe
                    src="https://drive.google.com/file/d/1XCC311gdZKthu9LPcfaamjuV17aUrONC/preview"
                    allow="encrypted-media"
                    allowFullScreen
                />
            </div> */}
            <br></br>
            <ul className="list">
                <li>Developed Simon Sense, a physical “Simon Says” memory game that uses gesture-based input by covering clear LEDs instead of pressing buttons.</li>
                <li>Paired each RGBY output LED with a clear LED that detects when it is covered, enabling intuitive, touchless interaction.</li>
                <li>Implemented automatic ambient light calibration to adapt sensor thresholds to current room lighting for input detection.</li>
                <li>Designed a custom PCB in Eagle to manage LED control, light detection, and audio output in a compact layout.</li>
                <li>Integrated a speaker to provide sound feedback during gameplay, enhancing user engagement and timing cues.</li>
                <li>Wrote Arduino firmware to handle input sensing, LED animations, game logic, and synchronized audio playback.</li>
                <li>
                    <a
                        href="https://github.com/LaggyJet/SimonSense"
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
