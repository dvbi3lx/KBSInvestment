"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { NavBar } from "./nav";

export function NavBarWrapper() {
    const pathname = usePathname();
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Sprawdź stan modala przy montowaniu komponentu
        const checkModalState = () => {
            const modalState = localStorage.getItem("modal-open");
            setIsModalOpen(modalState === "true");
        };

        checkModalState();

        // Nasłuchuj zmian w localStorage (cross-tab)
        const handleStorageChange = () => {
            checkModalState();
        };

        window.addEventListener("storage", handleStorageChange);

        // Sprawdzaj stan modala co 100ms (prostsze rozwiązanie)
        const interval = setInterval(checkModalState, 100);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
            clearInterval(interval);
        };
    }, []);

    // Ukryj navbar na podstronie polityki prywatności, regulaminu lub gdy modal jest otwarty
    if (pathname === "/polityka-prywatnosci" || pathname === "/regulamin" || isModalOpen) {
        return null;
    }

    return <NavBar />;
}
