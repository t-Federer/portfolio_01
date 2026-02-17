import { Canvas } from "@react-three/fiber" 
import { PerspectiveCamera } from "@react-three/drei"
import Computers from "../components/Computers"
import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader"
// import { Leva, useControls } from "leva"
import { useMediaQuery } from "react-responsive"
import HeroCamera from "../components/HeroCamera"
import Button from "../components/Button"

const Hero = () => {
        const isSmall = useMediaQuery({maxWidth: 440})
        const isMobile = useMediaQuery({maxWidth: 768});
        const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

        return (
                <section id="home" className="min-h-screen w-full flex flex-col relative">
                        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hi, I am Federico</p>
                                <p className="hero_tag text-gray_gradient">Building UX & Frontends</p>
                        </div>
                        <div className="w-full h-full absolute inset-0">
                                {/* <Leva /> */}
                                <Canvas className="w-full h-full">
                                        <Suspense fallback={<CanvasLoader />}>
                                                <PerspectiveCamera makeDefault position={[0, 0, 20]}/>
                                                <HeroCamera isMobile={isMobile}>        
                                                        <Computers 
                                                                position={
                                                                        isSmall ? [0, -1.2, 0] :
                                                                        isMobile ? [0.5, -1.4, 0] :
                                                                        isTablet ? [0.7, -1.9, 0] :
                                                                        [0.95, -2.1, 0]
                                                                }  
                                                                rotation={[0.1, -Math.PI / 2, 0]} 
                                                                scale={
                                                                        isSmall ? 0.09 :
                                                                        isMobile ? 0.1 :
                                                                        isTablet ? 0.11 :
                                                                        0.14
                                                                } 
                                                        />
                                                </HeroCamera>
                                                <ambientLight intensity={1} />
                                                <directionalLight position={[10, 10, 10]} intensity={1.5} /> 
                                        </Suspense>
                                </Canvas>
                        </div>

                        <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                                <a href="#about" className="w-fit">
                                        <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
                                </a>
                        </div>
                </section>
        )
}

export default Hero