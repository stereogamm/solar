import { IconHeart } from "@tabler/icons-react";
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
  return (
    <>
      <Card withBorder radius="md" p="md" className={styles.card}>
        <Card.Section>
          <Image alt={name} height={180} />
        </Card.Section>
        <Card.Section className={styles.section} mt="md">
          <Group justify="apart">
            <Text fz="lg" fw={500}>
              {name}
            </Text>
            <Badge size="sm" variant="light">
              {name}
            </Badge>
          </Group>
          <Text fz="sm" mt="xs">
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
          Show details
        </Button>
        <ActionIcon variant="default" radius="md" size={36}>
          <IconHeart className={styles.like} stroke={1.5} />
        </ActionIcon>
      </Group>
      </Card>
    </>
  );
};
