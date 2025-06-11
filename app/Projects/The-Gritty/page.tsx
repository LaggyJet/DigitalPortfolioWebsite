'use client';

export default function TheGrittyPage() {
    return (
        <div className="container">
            <h1 className="title" style={{ textDecoration: 'underline' }}>The Gritty</h1>
            <div className="responsive-iframe-wrapper">
                <iframe
                    src="https://drive.google.com/file/d/1XCC311gdZKthu9LPcfaamjuV17aUrONC/preview"
                    allow="encrypted-media"
                    allowFullScreen
                    title="The Gritty gameplay preview"
                    loading="lazy"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                />
            </div>
            <ul className="list">
                <li>A 3D First Person Shooter made With Unity.</li>
                <li>Implemented diverse enemy types with unique weapons and designed an engaging final boss encounter.</li>
                <li>Created a skill tree system to support player progression and decision-making.</li>
                <li>Integrated cooperative multiplayer functionality for enhanced replayability.</li>
                <li>
                    Engineered an Arduino-based debugger for single-player mode to display health and enable real-time updates to player vitals.
                    <ul className="sublist">
                        <li>Implemented a heartbeat check to maintain reliable communication and detect disconnections.</li>
                    </ul>
                </li>
                <li>
                    <a
                        href="https://drive.google.com/uc?export=download&id=19bGvq5_zmxKtidAp9CT8GewPzC5zlVkd"
                        className="link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download The Gritty Installer
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/LaggyJet/TheGritty"
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
