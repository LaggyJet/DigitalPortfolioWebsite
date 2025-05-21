'use client';

import { useRouter } from "next/navigation";
import { LeftArrow } from "../../Shared/icons";

export default function FSFlightSimPage() {
    const router = useRouter();
    return (
        <div className="container">
            <h1 className="title"><u>FS - Flight Sim</u></h1>
            <p className="description">Filler for video</p>
            <ul className="list">
                <li>Includes multiple playable classes and supports multiplayer with friends.</li>
                <li>Features an Arduino-based debugger in single-player mode that displays health and allows real-time updates to health and stamina.</li>
                <li>Arduino connection includes a heartbeat check to ensure reliable communication and detect disconnections.</li>
                <li>
                    <a href="https://drive.google.com/file/d/19bGvq5_zmxKtidAp9CT8GewPzC5zlVkd/view?usp=sharing" className="link">
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