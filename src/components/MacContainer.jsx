import { useGLTF, useScroll, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Preload before the component mounts
useGLTF.preload("/mac.glb");
useTexture.preload("/red.jpg");

const MacContainer = () => {
  const model = useGLTF("/mac.glb");
  const tex = useTexture("/red.jpg");
  const meshs = [];

  model.scene.traverse((e) => {
    meshs[e.name] = e;
  });

  meshs.screen.rotation.x = THREE.MathUtils.degToRad(180);
  meshs.matte.material.map = tex;
  meshs.matte.material.emissiveIntensity = 0;
  meshs.matte.material.metalness = 0;
  meshs.matte.material.roughness = 0;

  const data = useScroll();

  useFrame(() => {
    meshs.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90);
  });

  return (
    <group position={[0, -15, 20]}>
      <primitive object={model.scene} />
    </group>
  );
};

export default MacContainer;
