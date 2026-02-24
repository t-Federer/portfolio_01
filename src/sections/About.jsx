import { Suspense, useState, useCallback, useMemo } from "react";
import Button from "../components/Button";
import { myProjects, techStack } from "../constants/index";
import { Canvas } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import DemoComputer from "../components/DemoComputer";
import CanvasLoader from "../components/CanvasLoader";

const projectCount = myProjects.length;

// Lookup map: label → tech object (built once, outside the component)
const techMap = Object.fromEntries(techStack.map(t => [t.label, t]));

const ProjectCanvas = ({ texture, animTrigger }) => (
  <Canvas
    resize={{ scroll: false, debounce: { scroll: 50, resize: 0 } }}
    style={{ width: "100%", height: "100%" }}
  >
    <ambientLight intensity={Math.PI} />
    <directionalLight position={[10, 10, 5]} />
    <Center>
      <Suspense fallback={<CanvasLoader />}>
        <group scale={2} position={[0, -2, -1]} rotation={[0.3, 0, 0]}>
          <DemoComputer texture={texture} animTrigger={animTrigger} />
        </group>
      </Suspense>
    </Center>
  </Canvas>
);

const About = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [animTrigger, setAnimTrigger] = useState(0);
  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigation = useCallback((direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
    setAnimTrigger((prev) => prev + 1);
  }, []);

  // Resolve tag labels → tech objects for the current project
  const currentTags = useMemo(
    () => currentProject.tags.map(label => techMap[label]).filter(Boolean),
    [currentProject]
  );

  return (
    <section id="about" className="c-space my-20 scroll-mt-20 sm2:scroll-mt-35 xl2:scroll-mt-22">

      {/* ── TABLET (sm2–xl2) + MOBILE (< sm2) layout ─────────────────────── */}
      <div className="flex flex-col gap-3 xl2:hidden">

        {/* Row 1: Who am I (+ Tools side by side from sm2 up) */}
        <div className="flex gap-3 sm2:h-56">

          {/* Who am I — full width on mobile, w-2/5 on tablet */}
          <div className="w-full sm2:w-2/5 grid-container !gap-2 !p-4 overflow-hidden">
            <div className="flex flex-col flex-1 justify-between gap-4">
              <div className="flex flex-col gap-2">
                <p className="grid-headtext !text-xl !mb-0">Who am I</p>
                <p className="grid-subtext">
                  Recent Master's graduate with honors in Digital Humanities.
                </p>
                <p className="grid-subtext">
                  Based in Italy, I blend technology and creativity to craft human-centered UXs.
                </p>
              </div>
              <a href="#contact" className="w-full shrink-0">
                <Button name="Contact Me" isBeam containerClass="w-full mt-0" />
              </a>
            </div>
          </div>

          {/* Tools — visible from sm2 up, 3-column grid */}
          <div className="hidden sm2:flex w-3/5 grid-container !gap-2 !p-4 flex-col overflow-hidden">
            <p className="grid-headtext !text-xl !mb-0 shrink-0">Tools I'm used to</p>
            <ul className="techstack-grid flex-1 min-h-0 list-none m-0 p-0">
              {techStack.map((tech, index) => (
                <li key={index} className="group flex items-center gap-1 px-0.5 cursor-default">
                  <div className="tech-logo techstack-logo shrink-0">
                    <img src={tech.path} alt={tech.label} className={`${tech.logoSize.tablet} object-contain`} />
                  </div>
                  <span className="text-base whitespace-nowrap text-white-600 transition-colors duration-200 group-hover:text-white cursor-text">
                    {tech.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Tools on its own row — mobile only (< sm2), 2-column grid */}
        <div className="flex sm2:hidden grid-container !gap-2 !p-4 flex-col overflow-hidden">
          <p className="grid-headtext !text-xl !mb-2 shrink-0">Tools I'm used to</p>
          <ul className="techstack-grid-mobile flex-1 min-h-0 list-none m-0 p-0">
            {techStack.map((tech, index) => (
              <li key={index} className="group flex items-center gap-1 px-0.5 cursor-default">
                <div className="tech-logo techstack-logo shrink-0">
                  <img src={tech.path} alt={tech.label} className={`${tech.logoSize.mobile} object-contain`} />
                </div>
                <span className="text-base whitespace-nowrap text-white-600 transition-colors duration-200 group-hover:text-white cursor-text">
                  {tech.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Row 2: Project info (+ Canvas side by side from sm2 up) */}
        <div className="flex gap-3 sm2:h-80">

          {/* Project info — full width on mobile, w-3/5 on tablet */}
          <div className="w-full sm2:w-3/5 grid-container !p-4 relative flex flex-col overflow-hidden">
            <div className="flex flex-col flex-1 justify-between gap-4">
              <div className="flex flex-col gap-2">
                <p className="grid-headtext !text-xl !mb-2 sm2:!mb-0">My Projects</p>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <img
                      src={currentProject.logo}
                      alt="logo"
                      className="h-5 w-5 object-contain rounded shrink-0"
                    />
                    <p className="grid-subtext font-semibold">{currentProject.title}</p>
                  </div>
                  <p className="grid-subtext">{currentProject.desc}</p>
                  <p className="grid-subtext">{currentProject.subdesc}</p>
                </div>
              </div>
              <div className="relative flex flex-col gap-4 z-10 shrink-0">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-1.5">
                    {/* mobile/tablet — logoSize.mobile */}
                    {currentTags.map((tech, index) => (
                      <div key={index} className="tech-logo techstack-logo">
                        <img src={tech.path} alt={tech.label} className={`${tech.logoSize.mobile} object-contain`} />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-white-600">
                    {currentProject.codeHref && (
                      <>
                        <a
                          className="grid-subtext hover:text-white transition-colors duration-300 underline"
                          href={currentProject.codeHref}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Code
                        </a>
                        <span className="grid-subtext select-none">•</span>
                      </>
                    )}
                    <a
                      className="flex items-center gap-1 grid-subtext hover:text-white transition-colors duration-300 underline"
                      href={currentProject.linkHref}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Link
                      <img src="src/assets/arrow-up.png" alt="arrow" className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <button className="arrow-btn" onClick={() => handleNavigation("previous")}>
                    <img src="src/assets/left-arrow.png" alt="left arrow" />
                  </button>
                  <button className="arrow-btn" onClick={() => handleNavigation("next")}>
                    <img src="src/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Canvas — hidden on mobile, visible from sm2 up */}
          <div className="hidden sm2:block w-2/5 grid-container p-0">
            <ProjectCanvas texture={currentProject.texture} animTrigger={animTrigger} />
          </div>

        </div>
      </div>

      {/* ── DESKTOP layout (≥ 1100px) ────────────────────────────────────── */}
      <div className="hidden xl2:grid w-full grid-cols-9 grid-rows-3 gap-3" style={{ gridTemplateRows: "1fr 0.7fr 0.7fr" }}>

        {/* Who am I */}
        <div className="col-span-3 row-span-1 grid-container">
          <p className="grid-headtext">Who am I</p>
          <p className="grid-subtext">
            Recent Master's graduate with honors in Digital Humanities.
          </p>
          <p className="grid-subtext">
            Based in Italy, I blend technology and creativity to craft human-centered UXs.
          </p>
          <a href="#contact" className="w-full mt-auto">
            <Button name="Contact Me" isBeam containerClass="w-full mt-4" />
          </a>
        </div>

        {/* Tech stack */}
        <div className="col-span-6 row-span-1 grid-container flex flex-col gap-2">
          <p className="grid-headtext shrink-0">Tools I'm used to</p>
          <ul className="techstack-grid-desktop flex-1 min-h-0 list-none m-0 p-0">
            {techStack.map((tech, index) => (
              <li key={index} className="group flex items-center gap-1.5 px-1 cursor-default">
                <div className="tech-logo shrink-0">
                  <img src={tech.path} alt={tech.label} className={`${tech.logoSize.desktop} object-contain`} />
                </div>
                <span className="text-base whitespace-nowrap text-white-600 transition-colors duration-200 group-hover:text-white cursor-text">
                  {tech.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Vertical label */}
        <div className="col-span-1 row-span-2 grid-container items-center justify-center">
          <p className="section-label-vertical text-white-600">My Projects</p>
        </div>

        {/* Project info */}
        <div className="col-span-4 row-span-2 grid-container relative overflow-hidden">
          <div
            className="relative p-3 backdrop-blur-3xl w-fit rounded-lg z-10"
            style={currentProject.logoStyle}
          >
            <img className="w-10 h-10 shadow-sm" src={currentProject.logo} alt="logo" />
          </div>
          <div className="relative flex flex-col gap-3 text-white-600 z-10">
            <p className="grid-headtext">{currentProject.title}</p>
            <p className="grid-subtext">{currentProject.desc}</p>
            <p className="grid-subtext">{currentProject.subdesc}</p>
          </div>
          <div className="relative flex items-center justify-between flex-wrap gap-3 z-10 mt-auto">
            <div className="flex items-center gap-3">
              {/* desktop — logoSize.desktop */}
              {currentTags.map((tech, index) => (
                <div key={index} className="tech-logo">
                  <img src={tech.path} alt={tech.label} className={`${tech.logoSize.desktop} object-contain`} />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 text-white-600">
              {currentProject.codeHref && (
                <>
                  <a
                    className="cursor-pointer underline hover:text-white transition-colors duration-300 grid-subtext"
                    href={currentProject.codeHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                  <span className="grid-subtext select-none">•</span>
                </>
              )}
              <a
                className="flex items-center gap-1.5 cursor-pointer underline hover:text-white transition-colors duration-300 grid-subtext"
                href={currentProject.linkHref}
                target="_blank"
                rel="noreferrer"
              >
                Link
                <img src="src/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
              </a>
            </div>
          </div>
          <div className="relative flex justify-between items-center z-10">
            <button className="arrow-btn" onClick={() => handleNavigation("previous")}>
              <img src="src/assets/left-arrow.png" alt="left arrow" />
            </button>
            <button className="arrow-btn" onClick={() => handleNavigation("next")}>
              <img src="src/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3D Computer */}
        <div className="col-span-4 row-span-2 grid-container p-0">
          <ProjectCanvas texture={currentProject.texture} animTrigger={animTrigger} />
        </div>

      </div>
    </section>
  );
};

export default About
