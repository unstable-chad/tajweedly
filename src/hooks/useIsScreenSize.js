import { useState } from "react";


const useIsMd = () => {
    const [isMd] = useState(() =>
        typeof window !== "undefined" && window.innerWidth >= 768
    );
    return isMd;
}





function useIs2xl() {
    // 2xl in Tailwind = 1536px by default
    const [is2xl] = useState(() =>
        typeof window !== "undefined" && window.innerWidth >= 1536
    );
    return is2xl;
}

export { useIsMd, useIs2xl } 