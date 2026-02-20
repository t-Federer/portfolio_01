import { Suspense, useState } from "react";
import Button from "../components/Button";
import { myProjects } from "../constants";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import DemoComputer from "../components/DemoComputer";
import CanvasLoader from "../components/CanvasLoader";

const projectCount = myProjects.length;

const techStack = [
  { name: "React", path: "src/assets/react.svg", label: "Git"},
  { name: "React", path: "src/assets/react.svg", label: "JavaScript"},
  { name: "React", path: "src/assets/tailwindcss.png", label: "Tailwind"},
  { name: "React", path: "src/assets/react.svg", label: "React"},
  { name: "React", path: "src/assets/react.svg", label: "Three.js"},
  { name: "React", path: "src/assets/react.svg", label: "Python"},
  { name: "React", path: "src/assets/react.svg", label: "SQL"},
  { name: "React", path: "src/assets/figma.svg", label: "Figma"},
  { name: "React", path: "src/assets/react.svg", label: "Illustrator"},
  { name: "React", path: "src/assets/react.svg", label: "PhotoShop"},
  { name: "React", path: "src/assets/react.svg", label: "Lightroom"},
  { name: "React", path: "src/assets/react.svg", label: "Unreal"},
  { name: "React", path: "src/assets/react.svg", label: "Blender"},
];

const About = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section id="about" className="c-space my-20 scroll-mt-20">

      {/* ── TABLET layout (< 1100px) ─────────────────────────────────────── */}
      <div className="flex flex-col gap-3 xl2:hidden">

        {/* Riga 1: Who am I + Tools */}
        <div className="flex gap-3 h-56">

          {/* Who am I */}
          <div className="w-2/5 grid-container !gap-2 !p-4 overflow-hidden">
            <div className="flex flex-col gap-1.5">
              <p className="grid-headtext !text-base !mb-0">Who am I</p>
              <p className="grid-subtext !text-sm">
                Recent master's graduate in digital humanities. Based in Italy, I honed my skills in frontend development, UX/UI design and 3D.
              </p>
            </div>
            <a href="#contact" className="w-full mt-auto shrink-0">
              <Button name={<span className="text-sm">Contact Me</span>} isBeam containerClass="w-full mt-0" />
            </a>
          </div>

          {/* Tools */}
          <div className="w-3/5 grid-container !gap-2 !p-4 flex flex-col overflow-hidden">
            <p className="grid-headtext !text-base !mb-0 shrink-0">Tools I'm used to</p>
            <ul className="techstack-grid flex-1 min-h-0 list-none m-0 p-0">
              {techStack.map((tech, index) => (
                <li key={index} className="group flex items-center gap-1 px-0.5 cursor-default">
                  <div className="tech-logo techstack-logo shrink-0">
                    <img src={tech.path} alt={tech.label} className="w-4 h-4 object-contain" />
                  </div>
                  <span className="text-sm whitespace-nowrap text-white-500 transition-colors duration-200 group-hover:text-white">
                    {tech.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Riga 2: Project info + Canvas */}
        <div className="flex gap-3 h-80">

          {/* Project info — w-3/5, specchio di Tools */}
          <div className="w-3/5 grid-container !p-4 relative flex flex-col overflow-hidden">
            <div className="flex flex-col gap-1.5">
              <p className="grid-headtext !text-base !mb-2">My Projects</p>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <img
                    src={currentProject.logo}
                    alt="logo"
                    className="h-5 w-5 object-contain rounded shrink-0"
                  />
                  <p className="grid-subtext !text-sm font-semibold text-white-600">{currentProject.title}</p>
                </div>
                <p className="grid-subtext !text-sm">{currentProject.desc}</p>
                <p className="grid-subtext !text-sm">{currentProject.subdesc}</p>
              </div>
            </div>
            <div className="relative flex flex-col gap-2 z-10 mt-auto shrink-0">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-1.5">
                  {currentProject.tags.map((tag, index) => (
                    <div key={index} className="tech-logo techstack-logo">
                      <img src={tag.path} alt={tag.name} />
                    </div>
                  ))}
                </div>
                <a
                  className="flex items-center gap-1.5 cursor-pointer text-white-600"
                  href={currentProject.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="text-sm">See it live</p>
                  <img src="src/assets/arrow-up.png" alt="arrow" className="w-2.5 h-2.5" />
                </a>
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

          {/* Canvas — w-2/5, specchio di Who am I */}
          <div className="w-2/5 grid-container p-0">
            <Canvas>
              <ambientLight intensity={Math.PI} />
              <directionalLight position={[10, 10, 5]} />
              <Center>
                <Suspense fallback={<CanvasLoader />}>
                  <group scale={2} position={[0, -2, -1]} rotation={[0.3, -0.4, 0]}>
                    <DemoComputer texture={currentProject.texture} />
                  </group>
                </Suspense>
              </Center>
              <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
            </Canvas>
          </div>

        </div>
      </div>

      {/* ── DESKTOP layout (≥ 1100px) ────────────────────────────────────── */}
      <div className="hidden xl2:grid w-full grid-cols-9 grid-rows-3 gap-3" style={{ gridTemplateRows: "1fr 0.7fr 0.7fr" }}>

        {/* Who am I */}
        <div className="col-span-3 row-span-1 grid-container">
          <p className="grid-headtext">Who am I</p>
          <p className="grid-subtext">
            Recent master's graduate in digital humanities. Based in Italy, I honed my skills in frontend development, UX/UI design and 3D.
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
                  <img src={tech.path} alt={tech.label} className="w-6 h-6 object-contain" />
                </div>
                <span className="whitespace-nowrap text-white-500 transition-colors duration-200 group-hover:text-white">
                  {tech.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Label verticale My Projects */}
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
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <p>See it live</p>
              <img src="src/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
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
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -2, -1]} rotation={[0.3, -0.4, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>

      </div>
    </section>
  );
};

export default About;
