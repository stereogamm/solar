import { useEffect, useState } from "react";
import { getBodies } from "../../../Shared/api/api-client";
import { PlanetCard } from "../../../Widgets/card/index";
import styles from "../css/bodiesList.module.css";
import { LoaderCustom } from "../../../Shared/ui/loader";
import { ModalWindow } from "../../../Widgets/modalWindow/index";

type Body = {
  id: string;
  name: string;
  isPlanet: boolean;
  bodyType: string;
  englishName: string;
  discoveredBy: string;
  semimajorAxis: number;
  aphelion: number;
};

type Bodies = Body[];

// type BodyListProps = {
//   id: string,
//   name: string
// }

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
            <>
              <p> {selectedBody.name}</p>
              <p>{`Semimajor Axis ${selectedBody.semimajorAxis}`}</p>
              <p>{`Aphelion ${selectedBody.aphelion}`}</p>
            </>
          )}
        </div>
      </ModalWindow>
    </div>
  );
};
