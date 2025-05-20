'use client';

import { useRouter } from 'next/navigation';
import { LeftArrow } from '../Icons/icons';

export default function SkillsExperiencePage() {
    const router = useRouter();
    return (
        <div className="container">
            <button className="backButton" onClick={() => router.back()}>
                <LeftArrow />
                Back
            </button>
            <h1 className="title">Skills</h1>
            <ul className="list">
                <li>Tools & IDEs: Visual Studio, Visual Studio Code, Qt Creator, Git, Jira, Bitbucket</li>
                <li>CAD & Design: Autodesk Inventor, Fusion 360, AutoCAD, SolidWorks, EAGLE</li>
                <li>Hardware & Fabrication: Drill Press, Lathe, Belt Sander, Bandsaw, Chop Saw, Soldering</li>
                <li>Certifications: Autodesk Inventor, Fusion 360, AutoCAD</li>
                <li>Strong Programming Languages: C++, C#, Python, Arduino</li>
                <li>Intermediate Programming Languages: SQL</li>
            </ul>
            <h1 className="title">Experience</h1>
            <p className="description">
                Internship at AVT Simulation: Used C++ and Qt Creator
            </p>
        </div>
    );
}