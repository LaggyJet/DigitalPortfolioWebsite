'use client';

export default function FPVDroneSimPage() {
    return (
        <div className="container">
            <h1 className="title" style={{ textDecoration: 'underline' }}>FPV Drone Simulator</h1>
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
                <li>Designed and built a drone simulation in Unreal Engine for real-time LiDAR scanning at dynamic points of interest.</li>
                <li>Implemented scan data export for external visualization of 3D-mapped environments post-flight.</li>
                <li>
                    <a
                        href="https://github.com/LaggyJet/FPV-DroneSim"
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