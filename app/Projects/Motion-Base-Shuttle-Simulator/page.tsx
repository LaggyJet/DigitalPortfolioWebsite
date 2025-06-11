'use client';

export default function MotionBaseShuttleSimulatorPage() {
    return (
        <div className="container">
            <h1 className="title" style={{ textDecoration: 'underline' }}>Motion Base Shuttle Simulator</h1>
            {// Make sure to fill with actual vid
            <p className="description" style={{ textDecoration: 'underline' }}>Video Coming Soon</p>
            /* <div className="responsive-iframe-wrapper">
                <iframe
                    src="https://drive.google.com/file/d/1XCC311gdZKthu9LPcfaamjuV17aUrONC/preview"
                    allow="encrypted-media"
                    allowFullScreen
                    title="Sensory Panel project video"
                    loading="lazy"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                />
            </div> */}
            <ul className="list">
                <li>Upgraded UE4 project to UE5 where you land the Atlantis Shuttle</li>
                <li>Networked Motion Platform with custom Joystick</li>
                <li>Networked Spectator view of the person landing the shuttle</li>
            </ul>
        </div>
    );
}