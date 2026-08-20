import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../../data/cv";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.documentElement.style.overflow = open ? "hidden" : "";
        return () => {
            document.documentElement.style.overflow = "";
        };
    }, [open]);

    return (
        <header
            className={`sticky top-0 z-50 h-16 border-b transition-shadow ${
                scrolled ? "border-hairline shadow-level-2" : "border-transparent"
            }`}
        >
            <div className="absolute inset-0 -z-10 bg-canvas/90 backdrop-blur" />
            <div className="mx-auto flex h-16 max-w-page items-center justify-between lg:px-0 px-6">
                <a href="#top" className="text-body-sm-strong text-ink" onClick={() => setOpen(false)}>
                    Thomas Alberto
                </a>

                <nav className="hidden items-center gap-2 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="rounded-full px-3 py-2 text-body-sm text-body transition-colors hover:bg-canvas-soft hover:text-ink"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden items-center gap-3 md:flex">
                    <a
                        href={profile.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-body-sm-strong flex h-7 items-center rounded-sm border border-hairline px-2 text-ink transition-colors hover:bg-canvas-soft"
                    >
                        GitHub
                    </a>
                    <a
                        href="#contact"
                        className="text-body-sm-strong flex h-7 items-center rounded-sm bg-primary px-2 text-on-primary transition-opacity hover:opacity-90"
                    >
                        Contact
                    </a>
                </div>

                <button
                    type="button"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                    className="flex h-9 w-9 items-center justify-center rounded-sm text-ink md:hidden"
                >
                    {open ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {open && (
                <div className="fixed inset-x-0 top-16 bottom-0 z-40 bg-canvas md:hidden">
                    <nav className="flex flex-col gap-1 px-4 py-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="text-display-sm rounded-md px-3 py-3 text-ink hover:bg-canvas-soft"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="mt-4 flex flex-col gap-3 border-t border-hairline pt-4">
                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noreferrer"
                                className="text-button-md flex h-10 items-center justify-center rounded-sm border border-hairline text-ink"
                            >
                                GitHub
                            </a>
                            <a
                                href="#contact"
                                onClick={() => setOpen(false)}
                                className="text-button-md flex h-10 items-center justify-center rounded-sm bg-primary text-on-primary"
                            >
                                Contact
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
