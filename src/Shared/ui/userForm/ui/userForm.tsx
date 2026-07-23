import { Button, Group, Paper, SimpleGrid, Text, TextInput } from '@mantine/core';
import styles from '../css/userForm.module.css';
import { useForm } from '@mantine/form';
import { useState } from 'react';

export function UserForm() {

  const validateLat = (value:string) => {
    if(value.length < 1) {
      return 'Field is required'
    } else  if(Number.isNaN(Number(value))){
      return 'Value should be a number'
    } else if ((Number(value) < -90) || Number(value) > 90){
      return 'Fill in correct value from -90 to +90'
    } return null
  }

    const validateLong = (value:string) => {
    if(value.length < 1) {
      return 'Field is required'
    } else  if(Number.isNaN(Number(value))){
      return 'Value should be a number'
    } else if ((Number(value) < -180) || Number(value) > 180){
      return 'Fill in correct value from -180 to 180'
    } return null
  }

    const validateAlt = (value:string) => {
    if(value.length < 1) {
      return 'Field is required'
    } else  if(Number.isNaN(Number(value))){
      return 'Value should be a number'
    } else if (Number(value) <= 0){
      return 'Fill in correct value from 0'
    } return null
  }
     const validateZone = (value:string) => {
    if(value.length < 1) {
      return 'Field is required'
    } else  if(Number.isNaN(Number(value))){
      return 'Value should be a number'
    } else if ((Number(value) < -12) || Number(value) > 14){
      return 'Fill in correct value from -12 to +14'
    } return null
  }

  const form = useForm({
    initialValues: {
      latitude: '',
      longitude: '',
      altitude: '',
      zone: '',
    },
    validate: {
      latitude: (value) => (validateLat(value)),
      longitude: (value) => (validateLong(value)),
      altitude: (value) => (validateAlt(value)),
      zone: (value) => (validateZone(value)),
    },
  })
  return (
    <Paper shadow="md" radius="md">
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={form.onSubmit((value)=>console.log(value))}>
          <Text variant="gradient"
                gradient={{ from: 'orange', to: 'white', deg: 35 }} 
                mb="lg" 
                fz="h3" 
                fw={400} 
                className={styles.title}>
          What can you see in the sky?
          </Text>

          <div className={styles.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput 
               {...form.getInputProps('latitude')}
              label="latitude" placeholder="Example: 52.3676"
              />
              <TextInput 
              {...form.getInputProps('longitude')}
              label="longitude" placeholder="Example: 4.9041"  />
              <TextInput 
              {...form.getInputProps('altitude')}
              label="altitude" placeholder="Height above sea level (meters)"  />
              <TextInput
              {...form.getInputProps('zone')}
              label="zone" placeholder="Example: +2" />
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