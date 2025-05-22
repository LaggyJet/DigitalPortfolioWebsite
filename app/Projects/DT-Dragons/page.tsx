'use client';

export default function TheGrittyPage() {
    return (
        <div className="container">
            <h1 className="title" style={{ textDecoration: 'underline' }}>DT Dragons</h1>
            {// Make sure to fill with actual vid
            /* <div className="responsive-iframe-wrapper">
            <iframe
                src="https://drive.google.com/file/d/1XCC311gdZKthu9LPcfaamjuV17aUrONC/preview"
                allow="encrypted-media"
                allowFullScreen
            />
            </div> */}
            <ul className="list">
                <li>An Augmented Reality Project made with Unreal Engine. You get to use modern weapons to defend yourself from medieval enemies.</li>
                <li>Virtual objects spawned with Spatial Anchors.</li>
                <li>Room scan required to use the app.</li>
                <li>
                    <a
                        href="/Projects/DT-Dragons"
                        className="link"
                    >
                        Download The Game (NOT AVAILABLE)
                    </a> 
                </li>
                <li>
                    <a href="https://github.com/LaggyJet/" className="link">
                        Check The Repo (NOT AVAILABLE)
                    </a>
                </li>
            </ul>
        </div>
    );
}
