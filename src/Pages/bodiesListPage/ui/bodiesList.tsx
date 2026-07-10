import { useEffect, useState } from "react";
import { PlanetCard } from "../../../Widgets/card/index";
import styles from "../css/bodiesList.module.css";
import { LoaderCustom } from "../../../Shared/ui/loader";
import { ModalWindow } from "../../../Widgets/modalWindow/index";
import { PLANETS_LIST_HEADERS } from "../../../Shared/configs/dataMapping/bodiesListInfo";
import { useBodiesStore } from "../../../stores/useBodiesStore";
import { CustomTextInput } from "../../../Shared/ui/textInput"
import { Profiler } from "react";
import { type ProfilerOnRenderCallback } from "react";
import { NoData } from "../../../Shared/ui/noData/index";
import { useLocalStorageHook } from "./customLSHook"


export type Body = {
  id: string;
  name: string;
  isPlanet: boolean;
  bodyType: string;
  englishName: string;
  discoveredBy: string;
  semimajorAxis: number;
  aphelion: number;
  meanRadius: number;
  mass: Mass;
  eccentricity: number;
  sideralOrbit: number;
  gravity: number;
};

type Mass = {
  massValue: number;
  massExponent: number;
};


export const BodiesList = () => {

// const bodyList = [
//                 {
//             "id": "lune",
//             "name": "La Lune",
//             "englishName": "Moon",
//             "isPlanet": false,
//             "moons": null,
//             "semimajorAxis": 384400,
//             "perihelion": 363300,
//             "aphelion": 405500,
//             "eccentricity": 0.05490,
//             "inclination": 5.14500,
//             "mass": {
//                 "massValue": 7.34600,
//                 "massExponent": 22
//             },
//             "vol": {
//                 "volValue": 2.19680,
//                 "volExponent": 10
//             },
//             "density": 3.34400,
//             "gravity": 1.62000,
//             "escape": 2380.00000,
//             "meanRadius": 1737.00000,
//             "equaRadius": 1738.10000,
//             "polarRadius": 1736.00000,
//             "flattening": 0.00120,
//             "dimension": "",
//             "sideralOrbit": 27.32170,
//             "sideralRotation": 655.72800,
//             "aroundPlanet": {
//                 "planet": "terre",
//                 "rel": "https://api.le-systeme-solaire.net/rest/bodies/terre"
//             },
//             "discoveredBy": "",
//             "discoveryDate": "",
//             "alternativeName": "",
//             "axialTilt": 6.68,
//             "avgTemp": 0,
//             "mainAnomaly": 0.00000,
//             "argPeriapsis": 0.00000,
//             "longAscNode": 0.00000,
//             "bodyType": "Moon",
//             "rel": "https://api.le-systeme-solaire.net/rest/bodies/lune"
//         },
//              {
//             "id": "deimos",
//             "name": "Deïmos",
//             "englishName": "Deimos",
//             "isPlanet": false,
//             "moons": null,
//             "semimajorAxis": 23459,
//             "perihelion": 23456,
//             "aphelion": 23471,
//             "eccentricity": 0.00020,
//             "inclination": 1.07500,
//             "mass": {
//                 "massValue": 1.47620,
//                 "massExponent": 15
//             },
//             "vol": {
//                 "volValue": 9.99780,
//                 "volExponent": 3
//             },
//             "density": 1.47100,
//             "gravity": 0.00300,
//             "escape": 5.55600,
//             "meanRadius": 6.20000,
//             "equaRadius": 7.80000,
//             "polarRadius": 5.10000,
//             "flattening": 0.00000,
//             "dimension": "15.0 × 12 × 10.4 ",
//             "sideralOrbit": 1.26244,
//             "sideralRotation": 30.29856,
//             "aroundPlanet": {
//                 "planet": "mars",
//                 "rel": "https://api.le-systeme-solaire.net/rest/bodies/mars"
//             },
//             "discoveredBy": "Asaph Hall",
//             "discoveryDate": "12/08/1877",
//             "alternativeName": "",
//             "axialTilt": 0,
//             "avgTemp": 0,
//             "mainAnomaly": 0.00000,
//             "argPeriapsis": 0.00000,
//             "longAscNode": 0.00000,
//             "bodyType": "Moon",
//             "rel": "https://api.le-systeme-solaire.net/rest/bodies/deimos"
//         },
// ]

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedBody, setSelectedBody] = useState<Body | null>(null);
  const [inputValue, setInputValue] = useState<string>('')
  const [debouncingValue, setDebouncingValue] = useState<string>('')


  const [value, setValue] = useLocalStorageHook('name', 'test')
  
  const fetchBodies = useBodiesStore((store) => store.fetchBodies);
  const bodyList = useBodiesStore((store) => store.bodies); 

  const loading = useBodiesStore((store) => store.loading);

  const onOpenModalWindow = (body: Body) => {
    setSelectedBody(body);
    setIsModalVisible(true);
  };

  const onCloseModalWindow = () => {
    setIsModalVisible(false);
    setSelectedBody(null);
    setInputValue('')
  };

  useEffect(() => {
    fetchBodies();
  }, [fetchBodies]);

useEffect(() => {
  const timeout = setTimeout(() => {
    setDebouncingValue(inputValue)
  }, 3000)

  return () => {
    clearTimeout(timeout)
  }
}, [inputValue])


  const onFilterValue = (event : React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const filteredList = (bodyList?.filter((body) => body.englishName.trim().toLowerCase().includes(debouncingValue.trim().toLowerCase())))
   
    
  const onRender : ProfilerOnRenderCallback = (id, phase, actualDuration, baseDuration, startTime, commitTime)  => {
    console.log(`Component ${id} has ${phase} during ${actualDuration}ms ${baseDuration} ${startTime} ${commitTime}`) //added to test profiler react feature
  }

    if (loading) {
    return (
      <div className={styles.loader}>
        <LoaderCustom />
      </div>
    );
  }


  return (
    <div className={styles.wrapper}>
    <Profiler id="BodiesList" onRender={onRender}> 
    <div className={styles["input-wrapper"]}>
    <CustomTextInput
      variant="filled"
      size="md"
      label="Body search"
      description="enter the body's name"
      placeholder=""
      onChange={onFilterValue}
      value={inputValue}
      autoFocus
    />
    </div>

    <div className={styles.list}>
      {filteredList?.length === 0? (<NoData text={"change search parameters"} />) : null}
      {inputValue?  
      (filteredList?.map((body: Body) => (
        <PlanetCard
          key={body.id}
          id={body.id}
          onClick={() => onOpenModalWindow(body)}
          name={body.name}
          englishName={body.englishName}
          discoveredBy={body.discoveredBy}
        />
      ))) :
      (bodyList?.map((body: Body) => (
        <PlanetCard
          key={body.id}
          id={body.id}
          onClick={() => onOpenModalWindow(body)}
          name={body.name}
          englishName={body.englishName}
          discoveredBy={body.discoveredBy}
        />
      )))}
      <ModalWindow isOpened={isModalVisible} onClose={onCloseModalWindow}>
        <div>
          {selectedBody && (
            <div className={styles.wrapper}>
              <h2> {selectedBody.englishName}</h2>
              <ul>
                <li className={styles["list-wrapper"]}>
                  <h3>{PLANETS_LIST_HEADERS.isPlanet}</h3>
                  <span>{selectedBody.isPlanet === true ? "Yes" : "No"}</span>
                </li>
                <li className={styles["list-wrapper"]}>
                  <h3>{PLANETS_LIST_HEADERS.bodyType}</h3>
                  <span>{selectedBody.bodyType}</span>
                </li>
                <li className={styles["list-wrapper"]}>
                  <h3>{PLANETS_LIST_HEADERS.meanRadius}</h3>
                  <span>{selectedBody.meanRadius}</span>
                </li>
                <li className={styles["list-wrapper"]}>
                  <h3>{PLANETS_LIST_HEADERS.mass}</h3>
                  <span>
                    {" "}
                    {selectedBody.mass.massValue} × 10
                    <sup>{selectedBody.mass.massExponent}</sup> kg
                  </span>
                </li>
                <li className={styles["list-wrapper"]}>
                  <h3>{PLANETS_LIST_HEADERS.semimajorAxis}</h3>
                  <span>{selectedBody.semimajorAxis}</span>
                </li>
                <li className={styles["list-wrapper"]}>
                  <h3>{PLANETS_LIST_HEADERS.eccentricity}</h3>
                  <span>{selectedBody.eccentricity}</span>
                </li>
                <li className={styles["list-wrapper"]}>
                  <h3>{PLANETS_LIST_HEADERS.sideralOrbit}</h3>
                  <span>{selectedBody.sideralOrbit}</span>
                </li>
                <li className={styles["list-wrapper"]}>
                  <h3>{PLANETS_LIST_HEADERS.gravity}</h3>
                  <span>{selectedBody.gravity}</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </ModalWindow>
    </div>
      </Profiler>
     </div>
  );
};





