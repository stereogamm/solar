import styles from '../css/positions.module.css'
import { UserForm } from '../../../Shared/ui/userForm/ui/userForm'
import { LoaderCustom } from '../../../Shared/ui/loader/ui/loader'
import { useSearchParams } from "react-router";
import { useCustomPositionBodiesStore } from '../../../stores/useCustomPositionBodies';
import customBodies from '../../../Shared/api/mockApiData/customPositionBodies.json'
import { Canvas } from '@react-three/fiber'
import { Planet } from './planet'
import { OrbitControls } from '@react-three/drei'

export type Position = {
      name: string,
      ra: string,
      dec: string
      az: string,
      alt: string
    }

export type Location = {
    latitude: number,
    longitude: number,
    elevation: number,
    timezone: number,
  }

export type TimeInfo = {
    calculated_for_utc: string,
    local_time_display: string,
    universal_time_ut: string,
    universal_time_decimal: number,
    julian_day: number,
    day_number_j2000: number,
    greenwich_sidereal_time: string,
    local_sidereal_time: string,
    gst_decimal: number,
    lst_decimal: number
  }

export type PositionApiResponse = {
    positions: Position[],
    location: Location,
    time_info: TimeInfo,
}

export type Positions = Position[]

export const Positions = () => {
    const [searchParams, setSearchParams] = useSearchParams()

  const fetchBodies = useCustomPositionBodiesStore((store) => store.getCustomBodies);
//   const bodyList = useCustomPositionBodiesStore((store) => store.bodies); 
  const loading = useCustomPositionBodiesStore((store) => store.loading);

    const initialValue = {
        lat: searchParams.get('lat') ?? '',
        lon: searchParams.get('lon') ?? '',
        elev: searchParams.get('elev') ?? '',
        datetime: searchParams.get('datetime') ?? '',
        zone: searchParams.get('zone') ?? '',
    }

const handleSubmit = () => {
    fetchBodies(initialValue)
}

    return (
        <div className={styles.page}>
            <div className={styles.form}>
                <UserForm 
                initialValue={initialValue} 
                setSearchParamsFn={(value) => setSearchParams(value)}/>
            </div>
            <button onClick={handleSubmit} >get bodies</button>
            {loading && 
                <div className={styles.loader}>
                    <LoaderCustom />
                </div>
                
            }
            {/* {bodyList?.map((body) => {
                return <div key={body.name}>{body.name}</div>
            })} */}
                 <div className={styles.scene}>
                    <Canvas camera={{ position: [0, 2, 10] }}>
                        <color attach="background" args={['#040414']} />
                      <OrbitControls minDistance={5} maxDistance={25} enablePan={false}/>
                      <ambientLight intensity={0.2} />
                      <pointLight position={[5, 5, 5]} intensity={100} />
                        {customBodies.positions?.map((body) => {
                            return (
                             <Planet key={body.name} name={body.name} alt={body.alt} az={body.az} />
                            )
                        })}
                    </Canvas>
                </div>
        </div>
    )
}