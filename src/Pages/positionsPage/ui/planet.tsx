import { Text } from "@react-three/drei";
import {
  stringToDecimal,
  getPositionFromAzAlt,
} from "../../../Shared/utils/stringToDecimal";
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Billboard, useTexture } from "@react-three/drei";
import { PLANETS_TEXTURES } from "../../../Shared/configs/planetsTextures/planetTexture";

export type PlanetProps = {
  name: string;
  az: string;
  alt: string;
};

export const Planet = ({ name, az, alt }: PlanetProps) => {
  const [hovered, setHovered] = useState(false);

  const meshRef = useRef<THREE.Mesh>(null);

  const texture = useTexture(PLANETS_TEXTURES[name]);

  useFrame(() => {
    if (!meshRef.current) return;
    const targetScale = hovered ? 1.4 : 1;
    meshRef.current.scale.x += (targetScale - meshRef.current.scale.x) * 0.1;
    meshRef.current.scale.y += (targetScale - meshRef.current.scale.y) * 0.1;
    meshRef.current.scale.z += (targetScale - meshRef.current.scale.z) * 0.1;
  });

  const azDecimal = stringToDecimal(az);
  const altDecimal = stringToDecimal(alt);

  const position = getPositionFromAzAlt(azDecimal, altDecimal);

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial map={texture} roughness={1} />
      </mesh>
      <Billboard>
        <Text
          anchorX="left"
          anchorY="middle"
          fontSize={0.2}
          position={[0.5, 0, 0]}
          fillOpacity={0.6}
        >
          {name}
        </Text>
      </Billboard>
    </group>
  );
};
