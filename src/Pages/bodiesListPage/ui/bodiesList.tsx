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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedBody, setSelectedBody] = useState<Body | null>(null);

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
  };

  useEffect(() => {
    fetchBodies();
  }, [fetchBodies]);

  if (loading) {
    return (
      <div className={styles.loader}>
        <LoaderCustom />
      </div>
    );
  }

  const onRender : ProfilerOnRenderCallback = (id, phase, actualDuration, baseDuration, startTime, commitTime)  => {
    console.log(`Component ${id} has ${phase} during ${actualDuration}ms ${baseDuration} ${startTime} ${commitTime}`) //added to test profiler react feature
  }

  return (
    <>
    <Profiler id="BodiesList" onRender={onRender}> 
    <div className={styles["input-wrapper"]}>
    <CustomTextInput
      variant="filled"
      size="md"
      label="Body search"
      description="enter the body's name"
      placeholder=""
    />
    </div>


    <div className={styles.list}>
      {bodyList?.map((body: any) => (
        <PlanetCard
          key={body.id}
          id={body.id}
          onClick={() => onOpenModalWindow(body)}
          name={body.name}
          englishName={body.englishName}
          discoveredBy={body.discoveredBy}
        />
      ))}
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
     </>
  );
};
