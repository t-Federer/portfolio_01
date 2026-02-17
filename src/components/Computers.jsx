import { useGLTF } from '@react-three/drei';
import { useEffect } from 'react';

const Computers = (props) => {
  const { scene } = useGLTF('./models/desktop_pc/scene.gltf');

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

useGLTF.preload('./models/desktop_pc/scene.gltf');

export default Computers;