"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

const links = [
    { href: "#uslugi", label: "Usługi", id: "uslugi" },
    { href: "#dlaczego-my", label: "Dlaczego my", id: "dlaczego-my" },
    { href: "#realizacje", label: "Realizacje", id: "realizacje" },
    { href: "#opinie", label: "Opinie", id: "opinie" },
    { href: "#faq", label: "FAQ", id: "faq" },
    { href: "#kontakt", label: "Kontakt", id: "kontakt" },
];

const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

export function NavBar() {
    return (
        <header className="fixed top-6 z-50 w-full bg-transparent">
            <div className="mx-auto w-full px-4 lg:px-6">
                <div className="mx-auto flex h-16 max-w-4xl items-center justify-between rounded-2xl border border-white/20 bg-white/80 px-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-md supports-[backdrop-filter]:bg-white/70">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <span className="text-xl font-bold text-gray-900">KBS Investment</span>
                    </Link>

                    {/* Navigation Menu */}
                    <NavigationMenu className="hidden lg:flex">
                        <NavigationMenuList className="flex items-center gap-6">
                            {links.map((link) => (
                                <NavigationMenuItem key={link.href}>
                                    <button
                                        onClick={() => scrollToSection(link.id)}
                                        className={cn(
                                            "flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors cursor-pointer bg-transparent border-none p-0"
                                        )}
                                    >
                                        {link.label}
                                    </button>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Right Side - Utility Buttons */}
                    <div className="flex items-center gap-3">
                        {/* Mobile Menu */}
                        <div className="lg:hidden">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="outline" size="icon" aria-label="Menu" className="h-9 w-9 rounded-full border-gray-200 bg-transparent hover:bg-gray-50">
                                        <Menu className="h-4 w-4 text-gray-600" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="right" className="flex flex-col gap-2">
                                    {links.map((link) => (
                                        <button
                                            key={link.href}
                                            onClick={() => scrollToSection(link.id)}
                                            className="flex items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-gray-50 cursor-pointer bg-transparent border-none w-full text-left"
                                        >
                                            {link.label}
                                        </button>
                                    ))}
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}


