'use client';

export default function SensoryPanelPage() {
    return (
        <div className="container">
            <h1 className="title" style={{ textDecoration: 'underline' }}>Sensory Panel</h1>
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
                <li>A fully custom designed Sensory Panel for Neurodivergent kids.</li>
                <li>Designed a custom Arduino Library for other panels to share settings each other.</li>
                <li>Fabricated a generic Eagle PCB board to be used by future students.</li>
                <li>Created the base panel box shape, along with the specific cover for the Backlit Panel.</li>
                <li>Made a Unity App that lets you set settings and users for the panels to use.</li>
                <li>
                    <a
                        href="https://github.com/LaggyJet/SensoryPanel"
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