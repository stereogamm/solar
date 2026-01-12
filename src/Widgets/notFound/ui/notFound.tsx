import { Button, Container, Group, Text, Title } from '@mantine/core';
import { Illustration } from './illustration';
import styles from '../css/notFound.module.css';
import { useNavigate } from 'react-router-dom';

export function NothingFoundBackground() {

    const navigate = useNavigate()
  return (
    <Container className={styles.root}>
      <div className={styles.inner}>
        <Illustration className={styles.image}/>
        <div className={styles.content}>
          <Title c="black.20" className={styles.title}>Nothing to see here</Title>
          <Text  size="lg" ta="center" c="black.21" className={styles.description}>
            Page you are trying to open does not exist. You may have mistyped the address, or the
            page has been moved to another URL. If you think this is an error contact support.
          </Text>
          <Group justify="center">
            <Button  size="md"
            variant="gradient"
      gradient={{ from: 'black.26', to: 'black.9', deg: 45 }}
       radius="sm" c="black.22"
       onClick={() => navigate("/")}
       >
        Take me back to home page</Button>
          </Group>
        </div>
      </div>
    </Container>
  );
}