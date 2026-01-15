
import { IconHeart } from "@tabler/icons-react";
import Img from "../../../Assets/images/milky-way.jpg";


import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Group,
  Image,
  Text,
} from "@mantine/core";

import styles from "../css/card.module.css";

type PlanetCardProps = {
  name: string;
  englishName: string;
  discoveredBy: string;
  onClick: () => void;
  id: string;
};



export const PlanetCard = ({
  name,
  englishName,
  discoveredBy,
  onClick, 
}: PlanetCardProps) => {

  return (
    <>
      <Card radius="xs" bg="black.9" className={styles.card}>
        <Card.Section className={styles.section}>
          <Image src={Img} alt={name} height={180} />
        </Card.Section>
        <Card.Section mt="md">
          <Group justify="apart">
            <Text fz="h2" fw={500} c="black.25">
              {englishName}
            </Text>
            <Badge
              size="lg"
              variant="gradient"
              gradient={{ from: "black.26", to: "black.9", deg: 45 }}
              radius="sm"
              c="black.22"
            >
              {name}
            </Badge>
          </Group>
          <Text c="black.22" fz="sm" mt="xs">
            Discovered by {discoveredBy === "" ? "who know's" : `${discoveredBy}`}
          </Text>
        </Card.Section>
        <Card.Section className={styles.section}>
          <Text mt="md" className={styles.label} c="dimmed"></Text>
          <Group gap={7} mt={5} c="black.22"></Group>
        </Card.Section>
        <Group mt="xs">
          <Button
            radius="md"
            style={{ flex: 1 }}
            variant="filled"
            size="sm"
            color="black.28"
            onClick={onClick}
          >
           
            <Text fw={500} c="black.22">
              explore
            </Text>
          </Button>

          <ActionIcon variant="default" radius="md" size={30}>
            <IconHeart className={styles.like} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Card>
    </>
  );
};
