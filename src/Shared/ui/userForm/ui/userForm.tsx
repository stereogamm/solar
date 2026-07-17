import { Button, Group, Paper, SimpleGrid, Text, TextInput } from '@mantine/core';
import styles from '../css/userForm.module.css';

export function UserForm() {
  return (
    <Paper shadow="md" radius="md">
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
          <Text variant="gradient"
                gradient={{ from: 'yellow', to: 'orange', deg: 75 }} 
                mb="lg" 
                fz="h2" 
                fw={400} 
                className={styles.title}>
          What can you see in the sky?
          </Text>

          <div className={styles.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput label="Latitude" placeholder="Example: 52.3676" required />
              <TextInput label="Longitude" placeholder="Example: 4.9041" required />
              <TextInput label="Altitude" placeholder="Height above sea level (meters)" required />
              <TextInput label="Observation date and time (UTC)" placeholder="Example: 2026-07-17T22:00:00" required />
              <TextInput label="Time Zone" placeholder="Example: +2" required />
            </SimpleGrid>
            <Group justify="flex-end" mt="md">
              <Button type="submit" className={styles.control}>
                Explore the sky
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}