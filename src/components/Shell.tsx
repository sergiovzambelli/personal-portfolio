"use client";

import React, { ReactNode, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ShellProps {
    children: ReactNode;
}

const Shell: React.FC<ShellProps> = ({ children }) => {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        setMounted(true);
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString("en-US", { hour12: false }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    if (!mounted) return null;

    const navItems = [
        { name: "/dashboard", path: "/" },
        { name: "/whoami", path: "/whoami" },
        { name: "/cases", path: "/cases" },
        { name: "/comm", path: "/comm" },
    ];

    return (
        <div className="flex flex-col min-h-screen font-mono text-sm">
            {/* Top Status Bar */}
            <header className="fixed top-0 left-0 right-0 h-10 bg-surface border-b border-white/10 flex items-center justify-between px-4 z-50">
                <div className="flex items-center gap-6">
                    <span className="text-primary font-bold">sergiovz@mainframe:~</span>
                    <span className="hidden md:inline text-muted">status: ONLINE</span>
                </div>
                <div className="flex items-center gap-4 text-muted">
                    <span className="hidden sm:inline">IP: 127.0.0.1</span>
                    <span>{currentTime}</span>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 mt-10 mb-12 p-6 md:p-12 overflow-y-auto w-full max-w-7xl mx-auto">
                {children}
            </main>

            {/* Bottom Command Bar / Nav */}
            <footer className="fixed bottom-0 left-0 right-0 h-12 bg-surface border-t border-white/10 flex items-center px-4 z-50">
                <div className="flex w-full max-w-7xl mx-auto items-center gap-2">
                    <span className="text-command font-bold">{">"}</span>
                    <nav className="flex gap-4 md:gap-8 ml-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`transition-colors duration-200 hover:text-primary ${pathname === item.path
                                        ? "text-primary underline decoration-2 underline-offset-4"
                                        : "text-muted"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Shell;
