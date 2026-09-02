import { Text } from '@react-three/drei'
import { stringToDecimal, getPositionFromAzAlt } from '../../../Shared/utils/stringToDecimal'
import { PLANET_COLORS } from '../../../Shared/configs/meshColorPlanetMaterial/planetColorMaterial'
import { type PlanetProps } from './planet'


export const Soleil = ({name, az, alt} : PlanetProps) => {

    const azDecimal = stringToDecimal(az)
    const altDecimal = stringToDecimal(alt)

    const position = getPositionFromAzAlt(azDecimal, altDecimal)


    return (
        <group position={position}>
<mesh>
    <sphereGeometry args={[0.5, 64, 64]} />
    <meshStandardMaterial color={PLANET_COLORS[name]} />
</mesh>
<mesh>
    <sphereGeometry args={[0.9, 64, 64]} />
    <meshBasicMaterial
        color={PLANET_COLORS[name]}
        transparent
        opacity={0.07}
    />
</mesh>
<pointLight
    intensity={10}
    distance={10}
/>   
            <Text
            anchorX="left"
            anchorY="middle"
            fontSize={0.5}
            position={[1, 0, 0]}
            fillOpacity={0}
            strokeWidth='2.5%'
            strokeColor={PLANET_COLORS[name]}
            >{name}</Text>
        </group>
    )
}