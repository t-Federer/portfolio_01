import { useFrame } from "@react-three/fiber";
import { useRef } from "react"
import { easing } from "maath"

const HeroCamera = ({ children, isMobile }) => {
        const groupRef = useRef();

        useFrame((state, delta) => {
                easing.damp3(state.camera.position, [0, 0, 11], 0.25, delta);
        
                if(!isMobile) {
                        // Clamp pointer.y to prevent upward rotation (showing underside)
                        const clampedY = Math.min(state.pointer.y / 3, 0);
                        easing.dampE(groupRef.current.rotation, [-clampedY, state.pointer.x / 4, 0], 0.25, delta);
                }
        })

        return (
                <group ref={groupRef}>
                        {children}
                </group>
        )
}

export default HeroCamera