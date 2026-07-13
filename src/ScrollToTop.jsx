import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // If there's a hash (#demos, #contactUs, etc.),
        // let HashLink handle the scrolling.
        if (hash) return;

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [pathname, hash]);

    return null;
}

export default ScrollToTop;