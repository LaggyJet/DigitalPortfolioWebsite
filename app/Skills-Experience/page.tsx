'use client';

export default function SkillsExperiencePage() {
    return (
        <div className="container">
            <h1 className="title">Skills</h1>
            <ul className="list">
                <li>Tools & IDEs: Visual Studio, Visual Studio Code, Qt Creator, Git, Jira, Bitbucket</li>
                <li>Game Engines & XR Development: Unity, Unreal Engine, VR and Mixed Reality application development</li>
                <li>CAD & Design: SolidWorks, Autodesk Inventor, Fusion 360, AutoCAD, EAGLE</li>
                <li>UI/UX Design: Interface prototyping and layout design using Figma and Qt Creator</li>
                <li>Hardware & Fabrication: Drill Press, Lathe, Belt Sander, Bandsaw, Chop Saw, Soldering</li>
                <li>Embedded Systems: Microcontroller-based development with Arduino, including hardware integration and real-time control</li>
                <li>Strong Programming Languages: C++, C#, Python, Arduino, MATLAB, Unreal Script, VIM</li>
                <li>Intermediate Programming Languages: SQL, HTML, CSS</li>
                <li>Programming Languages I've worked with: Lua, Java, JS, TypeScript</li>
                <li>Certifications: Autodesk Inventor, Fusion 360, AutoCAD</li>
                <li>Other Skills: AGILE development using Trello and Jira, Strong written and verbal communication abilities</li>
            </ul>
            <h1 className="title">Experience</h1>
            <ul className="list">
                <li>Internship at{' '}
                    <a href="https://www.avtsim.com/" className="link" target="_blank" rel="noopener noreferrer">
                        AVT Simulation
                    </a>
                    : Used C++ and Qt Creator</li>
                <li>
                    <a href="https://expo.scsp.ai/" className="link" target="_blank" rel="noopener noreferrer">
                        AI+Expo Hackathon
                    </a>
                    : Secured 2nd Place with an{' '}
                    <a href="/Projects/FPV-Drone-Sim" className="link">
                        FPV Drone Simulator
                    </a>
                </li>
            </ul>
        </div>
    );
}
