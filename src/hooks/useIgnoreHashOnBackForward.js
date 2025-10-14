// src/hooks/useIgnoreHashOnBackForward.js
import { useEffect } from "react";

export default function useIgnoreHashOnBackForward() {
    useEffect(() => {
        const nav = performance.getEntriesByType("navigation")[0];
        const isBF = nav && nav.type === "back_forward";
        if (isBF && window.location.hash) {
            const { pathname, search } = window.location;
            window.history.replaceState(null, "", `${pathname}${search}`);
        }
    }, []);
}
