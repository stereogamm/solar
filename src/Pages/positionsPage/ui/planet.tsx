import { Text } from '@react-three/drei'
import { stringToDecimal, getPositionFromAzAlt } from '../../../Shared/utils/stringToDecimal'

type PlanetProps = {
    name: string
    az: string
    alt: string
}

export const Planet = ({name, az, alt} : PlanetProps) => {

    const azDecimal = stringToDecimal(az)
    const altDecimal = stringToDecimal(alt)

    const position = getPositionFromAzAlt(azDecimal, altDecimal)


    return (
        <group position={position}>
            <mesh>
                <sphereGeometry args={[0.3, 32, 32]}/>
                <meshStandardMaterial color="#f9e6da"/>
            </mesh>    
            <Text
            anchorX="left"
            anchorY="middle"
            fontSize={0.3}
            position={[0.5, 0, 0]}
            >{name}</Text>
        </group>
    )
}