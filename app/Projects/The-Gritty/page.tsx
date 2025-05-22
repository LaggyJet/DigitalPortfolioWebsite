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
            />
        </div>
        <ul className="list">
            <li>Includes multiple playable classes and supports multiplayer with friends.</li>
            <li>Features an Arduino-based debugger in single-player mode that displays health and allows real-time updates to health and stamina.</li>
            <li>Arduino connection includes a heartbeat check to ensure reliable communication and detect disconnections.</li>
            <li>
            <a
                href="https://drive.google.com/uc?export=download&id=19bGvq5_zmxKtidAp9CT8GewPzC5zlVkd"
                className="link"
            >
                Download The Game
            </a>
            </li>
            <li>
            <a href="https://github.com/LaggyJet/TheGritty" className="link">
                Check The Repo
            </a>
            </li>
        </ul>
        </div>
    );
}
