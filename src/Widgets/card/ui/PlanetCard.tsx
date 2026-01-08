import { IconHeart } from "@tabler/icons-react";
import Img from '../../../Assets/images/milky-way.jpg';

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
};

export const PlanetCard = ({ name }: PlanetCardProps) => {

  console.log(name)
  return (
    <>
      <Card  radius="xs" bg="black.9" className={styles.card}>
        <Card.Section className={styles.section}  >
          <Image src={Img} alt={name} height={180} />
        </Card.Section>
        <Card.Section  mt="md">
          <Group justify="apart">
            <Text fz="lg" fw={500} c="orange">
              {name}
            </Text>
            <Badge size="sm" variant="light" c="orange">
              {name}
            </Badge>
          </Group>
          <Text c="red" fz="sm" mt="xs">
            {name}
          </Text>
        </Card.Section>
        <Card.Section className={styles.section}>
          <Text mt="md" className={styles.label} c="dimmed">
            Perfect for you, if you enjoy
          </Text>
            <Group gap={7} mt={5}>
                {name}
            </Group>
        </Card.Section>
              <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }}>
          details
        </Button>
        <ActionIcon variant="default" radius="md" size={30}>
          <IconHeart className={styles.like} stroke={1.5} />
        </ActionIcon>
      </Group>
      </Card>
    </>
  );
};
