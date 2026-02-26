import { useGLTF } from '@react-three/drei';
import { useEffect } from 'react';

const base = import.meta.env.BASE_URL;

const Computers = (props) => {
        const { scene } = useGLTF(`${base}models/desktop_pc/scene.gltf`);

        useEffect(() => {
                console.log('Computer model loaded:', scene);
                scene.traverse((child) => {
                        console.log('Child:', child.type, child.name);
                });
        }, [scene]);

        return (
                <group {...props} dispose={null}>
                        <primitive 
                                object={scene} 
                                scale={5}
                                position={[0, 0, 0]}
                        />
                </group>
        );
};

useGLTF.preload(`${import.meta.env.BASE_URL}models/desktop_pc/scene.gltf`);

export default Computers;
