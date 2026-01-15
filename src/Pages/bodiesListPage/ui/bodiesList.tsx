import { useEffect, useState } from "react";
import { getBodies } from "../../../Shared/api/api-client";
import { PlanetCard } from "../../../Widgets/card/index";
import styles from "../css/bodiesList.module.css";
import { LoaderCustom } from "../../../Shared/ui/loader";
import { ModalWindow } from "../../../Widgets/modalWindow/index";
import { PLANETS_LIST_HEADERS } from "../../../Shared/configs/dataMapping/bodiesListInfo"

type Body = {
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
  massExponent: number
}

type Bodies = Body[];


export const BodiesList = () => {
  const [bodies, setBodies] = useState<null | Bodies>(null);
  const [loading, setLoading] = useState(true);

  const [isModalVisible, setIsModalVisible] = useState(false); 
  const [selectedBody, setSelectedBody] = useState<Body | null>(null); 

  const onOpenModalWindow = (body: Body) => {
    setSelectedBody(body);
    setIsModalVisible(true);
  };

  const onCloseModalWindow = () => {
    setIsModalVisible(false);
    setSelectedBody(null);
  };

  useEffect(() => {
    const fetchBodies = async () => {
      const data = await getBodies();
      setBodies(data.bodies);
      setLoading(false);
    };
    fetchBodies();
  }, []);

  if (loading) {
    return (
      <div className={styles.loader}>
        <LoaderCustom />
      </div>
    );
  }

  return (
    <div className={styles.list}>
      {bodies?.map((body) => (
        <div>
          <PlanetCard
            key={body.id}
            id={body.id}
            onClick={() => onOpenModalWindow(body)}
            name={body.name}
            englishName={body.englishName}
            discoveredBy={body.discoveredBy}
          />
        </div>
      ))}
      <ModalWindow isOpened={isModalVisible} onClose={onCloseModalWindow}>
        <div>
          {selectedBody && (
            <div className={styles.wrapper}>
              <h2> {selectedBody.englishName}</h2>
                <ul >
                  <li className={styles["list-wrapper"]}>
                    <h3>{PLANETS_LIST_HEADERS.isPlanet}</h3>
                    <span>{selectedBody.isPlanet === true ? "Yes" : "No" }</span>
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
                    <span>  {selectedBody.mass.massValue} × 10
                        <sup>{selectedBody.mass.massExponent}</sup> kg</span> 
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
  );
};

