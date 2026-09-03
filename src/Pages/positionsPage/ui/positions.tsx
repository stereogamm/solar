import styles from "../css/positions.module.css";
import { UserForm } from "../../../Shared/ui/userForm/ui/userForm";
import { LoaderCustom } from "../../../Shared/ui/loader/ui/loader";
import { useSearchParams } from "react-router";
import { useCustomPositionBodiesStore } from "../../../stores/useCustomPositionBodies";
import customBodies from "../../../Shared/api/mockApiData/customPositionBodies.json";
import { Canvas } from "@react-three/fiber";
import { Planet } from "./planet";
import { Soleil } from "./soleil";
import { OrbitControls, Cloud, Sparkles, Text } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

export type Position = {
  name: string;
  ra: string;
  dec: string;
  az: string;
  alt: string;
};

export type Location = {
  latitude: number;
  longitude: number;
  elevation: number;
  timezone: number;
};

export type TimeInfo = {
  calculated_for_utc: string;
  local_time_display: string;
  universal_time_ut: string;
  universal_time_decimal: number;
  julian_day: number;
  day_number_j2000: number;
  greenwich_sidereal_time: string;
  local_sidereal_time: string;
  gst_decimal: number;
  lst_decimal: number;
};

export type PositionApiResponse = {
  positions: Position[];
  location: Location;
  time_info: TimeInfo;
};

export type Positions = Position[];

export const Positions = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const fetchBodies = useCustomPositionBodiesStore(
    (store) => store.getCustomBodies,
  );
  //   const bodyList = useCustomPositionBodiesStore((store) => store.bodies);
  const loading = useCustomPositionBodiesStore((store) => store.loading);

  const initialValue = {
    lat: searchParams.get("lat") ?? "",
    lon: searchParams.get("lon") ?? "",
    elev: searchParams.get("elev") ?? "",
    datetime: searchParams.get("datetime") ?? "",
    zone: searchParams.get("zone") ?? "",
  };

  const handleSubmit = () => {
    fetchBodies(initialValue);
  };

  return (
    <div className={styles.page}>
      <div className={styles.form}>
        <UserForm
          initialValue={initialValue}
          setSearchParamsFn={(value) => setSearchParams(value)}
        />
      </div>
      <button onClick={handleSubmit}>get bodies</button>
      {loading && (
        <div className={styles.loader}>
          <LoaderCustom />
        </div>
      )}
      {/* {bodyList?.map((body) => {
                return <div key={body.name}>{body.name}</div>
            })} */}
      <div className={styles.info}>
        <h2>Observer</h2>
        <span>Latitude {customBodies.location?.latitude}°</span>
        <span>Longitude {customBodies.location?.longitude}°</span>
        <span>
          Local time {customBodies.time_info?.local_time_display}
        </span>
        <span>
          Local sidereal time {customBodies.time_info?.local_sidereal_time}
        </span>
      </div>
      <div className={styles.scene}>
        <Canvas camera={{ position: [0, 1, 12], fov: 80 }}>
          <color attach="background" args={["#000000"]} />
          <mesh position={[0, 5, 0]}>
            <coneGeometry args={[0.08, 0.25, 20]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
          <Text
            position={[0, 5.3, 0]}
            color="#454545"
            anchorX="center"
            anchorY="middle"
            fontSize={0.25}
          >
            Zenith
          </Text>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[4.96, 5, 96]} />
            <meshBasicMaterial transparent opacity={0.1} color="#8fa8ff" />
          </mesh>
          <Text
            position={[0, 0, 5]}
            color="#64748b"
            fillOpacity={0.3}
            anchorX="center"
            anchorY="middle"
          >
            N
          </Text>
          <Text
            position={[5, 0, 0]}
            color="#64748b"
            fillOpacity={0.3}
            anchorX="center"
            anchorY="middle"
          >
            E
          </Text>
          <Text
            position={[0, 0, -5]}
            color="#64748b"
            fillOpacity={0.3}
            anchorX="center"
            anchorY="middle"
          >
            S
          </Text>
          <Text
            position={[-5, 0, 0]}
            color="#64748b"
            fillOpacity={0.3}
            anchorX="center"
            anchorY="middle"
          >
            W
          </Text>
          <OrbitControls minDistance={5} maxDistance={15} enablePan={false} />
          <EffectComposer>
            <Bloom
              intensity={2}
              luminanceThreshold={0.7}
              luminanceSmoothing={0.9}
            />
          </EffectComposer>
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 3, 5]} intensity={80} color="#ffe7a3" />
          <pointLight position={[-5, 2, -5]} intensity={150} color="#9bbcff" />
          {customBodies.positions?.map((body) => {
            return body.name === "Soleil" ? (
              <Soleil
                key={body.name}
                name={body.name}
                alt={body.alt}
                az={body.az}
              />
            ) : (
              <Planet
                key={body.name}
                name={body.name}
                alt={body.alt}
                az={body.az}
              />
            );
          })}
          <Sparkles
            color="#ffffff"
            size={1.2}
            opacity={0.45}
            count={200}
            speed={0.01}
            scale={15}
            noise={5}
          />
          <Cloud seed={10} scale={2} volume={10} color="#7777b4" fade={200} />
        </Canvas>
      </div>
    </div>
  );
};
