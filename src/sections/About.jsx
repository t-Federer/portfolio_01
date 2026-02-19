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
      <div className="w-full grid grid-cols-9 grid-rows-3 gap-3">

        {/* BOX 1 — Chi sono */}
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
          <ul className="techstack-grid flex-1 min-h-0 list-none m-0 p-0">
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

        {/* Label "My Projects" */}
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
