import { useState } from "react"
import closeIcon from '../assets/close.svg';
import menuIcon from '../assets/menu.svg';
import { navLinks } from "../constants/index";

const NavItems = ({ closeMenu }) => {
        const handleClick = (e) => {
                if (!closeMenu) return;

                const href = e.currentTarget.getAttribute("href");
                const target = href ? document.querySelector(href) : null;

                if (!target) {
                        closeMenu();
                        return;
                }

                target.scrollIntoView({ behavior: "smooth" });
                e.preventDefault();

                // fallback timeout 
                const fallback = setTimeout(closeMenu, 1000);

                window.addEventListener(
                        "scrollend",
                        () => {
                                clearTimeout(fallback);
                                closeMenu();
                        },
                        { once: true }
                );
        };

        return (
                <ul className="nav-ul">
                        {navLinks.map(({ id, href, name }) => (
                                <li key={id} className="nav-li">
                                        <a
                                                href={href}
                                                className="nav-li_a block w-full"
                                                onClick={handleClick}
                                        >
                                                {name}
                                        </a>
                                </li>
                        ))}
                </ul>
        );
};

const Navbar = () => {
        const [isOpen, setIsOpen] = useState(false);

        const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);
        const closeMenu = () => setIsOpen(false);

        return (
                <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
                        <div className="max-w-7xl mx-auto">
                                <div className="flex justify-between items-center py-5 mx-auto c-space">
                                        <a href="#home" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">Federico Talarico</a>
                                        <button
                                                onClick={toggleMenu}
                                                className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
                                                aria-label="Toggle menu"
                                        >
                                                <img
                                                        src={isOpen ? closeIcon : menuIcon}
                                                        alt="toggle"
                                                        className="w-6 h-6"
                                                />
                                        </button>
                                        <nav className="sm:flex hidden">
                                                <NavItems />
                                        </nav>
                                </div>
                        </div>

                        <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
                                <nav className="p-5">
                                        <NavItems closeMenu={closeMenu} />
                                </nav>
                        </div>
                </header>
        );
};

export default Navbar;
