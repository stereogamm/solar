import { Text, Billboard } from "@react-three/drei";
import {
  stringToDecimal,
  getPositionFromAzAlt,
} from "../../../Shared/utils/stringToDecimal";
import { PLANET_COLORS } from "../../../Shared/configs/meshColorPlanetMaterial/planetColorMaterial";
import { PLANETS_TEXTURES } from "../../../Shared/configs/planetsTextures/planetTexture";
import { type PlanetProps } from "./planet";
import { useTexture } from "@react-three/drei";

export const Soleil = ({ name, az, alt }: PlanetProps) => {
  const azDecimal = stringToDecimal(az);
  const altDecimal = stringToDecimal(alt);

  const position = getPositionFromAzAlt(azDecimal, altDecimal);

  const sunTexture = useTexture(PLANETS_TEXTURES[name]);

  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.5, 64, 64]} />
        <meshStandardMaterial
          emissive="#a80202"
          map={sunTexture}
          emissiveIntensity={0.95}
          toneMapped={false}
        />
      </mesh>
      <pointLight intensity={10} distance={10} />
      <Billboard>
        <Text
          anchorX="left"
          anchorY="middle"
          fontSize={0.5}
          position={[1, 0, 0]}
          strokeWidth="3.5%"
          strokeColor={PLANET_COLORS[name]}
        >
          {name}
        </Text>
      </Billboard>
    </group>
  );
};
