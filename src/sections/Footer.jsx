const Footer = () => {
        return (
                <section className="c-space pt-7 pb-3 border-t border-black-300 flex flex-col items-center gap-3">
                        <div className="flex gap-3">
                                <a href="https://www.linkedin.com/in/talaricofederico" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                                        <img
                                                src="src/assets/linkedin.svg"
                                                alt="linkedin"
                                                className="w-5.5 h-5.5 relative z-10"
                                        />
                                </a>
                                <a href="https://github.com/t-Federer" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                                        <img
                                                src="src/assets/github.svg"
                                                alt="github"
                                                className="w-7 h-7 relative z-10"
                                        />
                                </a>
                        </div>
                        <p className="text-white-500">© 2026 Federico Talarico. All rights reserved.</p>
                </section>
        );
};

export default Footer;
