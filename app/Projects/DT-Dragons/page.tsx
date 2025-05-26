'use client';

export default function DTDragonsPage() {
    return (
        <div className="container">
            <h1 className="title" style={{ textDecoration: 'underline' }}>DT Dragons</h1>
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
                <li>An Augmented Reality experience built with Unreal Engine where players fight hellhounds and a fire-breathing dragon in their physical space.</li>
                <li>Led the team as project manager during the final month, managing five peers, setting deadlines, and coordinating development efforts.</li>
                <li>Integrated nav-mesh functionality so enemies could navigate using the player's room scan.</li>
                <li>Implemented haptic feedback (audio and vibration) to enhance weapon responsiveness and immersion.</li>
                <li>Developed a round-based spawning system for dynamic hellhound encounters.</li>
                <li>Built a custom direct-selector allowing players to intuitively grab virtual objects.</li>
                <li>Worked on weapon systems and enemy damage logic.</li>
                <li>Contributed significantly to bug fixes and quality-of-life improvements across the project.</li>
                <li>
                    <a
                        href="https://drive.google.com/uc?export=download&id=1X2Oifbh0SUdznJLgcNtaYeFWe0fGSV01"
                        className="link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download DT Dragons MR Installer (Quest 3/3S)
                    </a> 
                </li>
                <li>
                    <a
                        href="https://github.com/LaggyJet/DT-Dragons-Forked"
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
