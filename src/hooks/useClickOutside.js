import { useEffect } from "react";

const useClickOutside = (ref, handler, active, mobileNavButton) => {
    useEffect(() => {

        if (!active) return;
        const listener = (e) => {
            if (!ref.current || ref.current.contains(e.target) || mobileNavButton.current.contains(e.target)) return;
            handler();
        }

        document.addEventListener("pointerdown", listener);
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 5; // Ensure this is lower than the ref element's z-index
        `;
        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener("pointerdown", listener);
            document.body.removeChild(overlay);

            document.body.style.overflow = '';
        };
    }, [ref, handler, active, mobileNavButton]);
}

export default useClickOutside