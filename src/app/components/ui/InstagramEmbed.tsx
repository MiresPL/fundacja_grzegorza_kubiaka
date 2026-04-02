import { useEffect, useRef } from "react";

declare global {
    interface Window {
        instgrm?: any;
    }
}

export function InstagramEmbed({ html }: { html: string }) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // dodaj skrypt tylko raz
        if (!window.instgrm) {
            const script = document.createElement("script");
            script.src = "https://www.instagram.com/embed.js";
            script.async = true;
            script.onload = () => {
                window.instgrm.Embeds.process();
            };
            document.body.appendChild(script);
        } else {
            window.instgrm.Embeds.process();
        }
    }, []);

    return (
        <div
            ref={ref}
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}