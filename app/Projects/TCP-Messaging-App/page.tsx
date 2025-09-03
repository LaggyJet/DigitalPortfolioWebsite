'use client';

import BaseProjectPage from "../../Components/BaseProject";

export default function TCPMessagingAppPage() {
    return (
        <BaseProjectPage
            title="TCP Messaging App"
            mainImage="MainChat.png"
            descriptions={[
                "Sends Messages through TCP sockets.",
                "Sends out a UDP broadcast with preset information.",
                "Custom Designed GUI in Qt Creator.",
                <>
                    Shows current users connected.
                    <ul className="sublist">
                        <li>Updates as users leave/join and if they own the server.</li>
                    </ul>
                </>,
                "Login and register page for every user.",
                "Custom commands",
                "Logger that logs all commands and messages that are saved for the host to review.",
                "Built-In Light and Dark Mode."
            ]}
            galleryImages={[
                "HostServer.png",
                "ConnectServer.png",
                "RegisterPage.png",
                "LogInPage.png"
            ]}
        />
    );
}