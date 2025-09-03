'use client';

import BaseProjectPage from "../../Components/BaseProject";

export default function DataVisualizerPage() {
    return (
        <BaseProjectPage
            title="Data Visualizer"
            mainImage="Final.png"
            descriptions={[
                <>
                    Custom made visualizer to parse through a WireShark pcap file and display specific packets of data",
                    <ul className="sublist">
                        <li>Was used to help debug movement for a{' '}
                            <a href="/Projects/Motion-Base-Shuttle-Simulator" className="link">
                                6DOF Motion Platform
                            </a>
                        </li>
                    </ul>
                </>,
                "Shows all rotional and translational movements (Roll, Pitch, Yaw, Heave, Surge, Sway)",
                "Can change between 2 packets (USB and UDP 6DOF)",
                "Updated to use PyQt6",
                "Has built-in installer for Wireshark and other dependencies if missing"
            ]}
            galleryImages={[
                "RotationData.png",
                "TranslationData.png"
            ]}
        />
    );
}