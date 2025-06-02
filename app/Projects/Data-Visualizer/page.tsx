'use client';

export default function DataVisualizerPage() {
    return (
        <div className="container">
            <h1 className="title" style={{ textDecoration: 'underline' }}>Data Visualizer</h1>
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
                <li>Custom made visualizer to parse through a WireShark pcap file and display its data</li>
                <li>Shows all rotional movements (Roll, Pitch, Yaw)</li>
            </ul>
        </div>
    );
}