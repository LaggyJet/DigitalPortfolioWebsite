"use client";

import { useEffect } from "react";

export default function ButtonAnimationDelay() {
    useEffect(() => {
        const buttons = document.querySelectorAll(".buttonRow > .button");
        buttons.forEach((btn, i) => {
            const element = btn as HTMLElement;
            element.style.animationDelay = `${2.0 + 0.3 * i}s`;
        });
    }, []);
    return null;
}
