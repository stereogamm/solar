import { Button, Group, Paper, SimpleGrid, Text, TextInput } from '@mantine/core';
import styles from '../css/userForm.module.css';
import { useForm } from '@mantine/form';
import { DateTimePicker } from '@mantine/dates';
import { useRef, useEffect } from 'react';


type FormData = {
      lat: string,
      lon: string,
      elev: string,
      datetime: string,
      zone: string,
}

type setSearchParamsFn = {
  setSearchParamsFn: (value: FormData) => void;
  initialValue?: FormData
}

export function UserForm({ setSearchParamsFn , initialValue } : setSearchParamsFn ) {

  const {lat, lon, elev, datetime, zone} = initialValue?? {
      lat: '',
      lon: '',
      elev: '',
      datetime: '',
      zone: '',
  }

  const inputFocus = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    inputFocus.current?.focus()
  }, [])

  const validateLat = (value:string) => {
    if(!value) {
      return 'Field is required'
    } else  if(Number.isNaN(Number(value))){
      return 'Value should be a number'
    } else if ((Number(value) < -90) || Number(value) > 90){
      return 'Fill in correct value from -90 to +90'
    } return null
  }

    const validateLong = (value:string) => {
    if(!value) {
      return 'Field is required'
    } else  if(Number.isNaN(Number(value))){
      return 'Value should be a number'
    } else if ((Number(value) < -180) || Number(value) > 180){
      return 'Fill in correct value from -180 to 180'
    } return null
  }

    const validateAlt = (value:string) => {
    if(!value) {
      return 'Field is required'
    } else  if(Number.isNaN(Number(value))){
      return 'Value should be a number'
    } else if (Number(value) <= 0){
      return 'Fill in correct value from 0'
    } return null
  }
     const validateZone = (value:string) => {
    if(!value) {
      return 'Field is required'
    } else  if(Number.isNaN(Number(value))){
      return 'Value should be a number'
    } else if ((Number(value) < -12) || Number(value) > 14){
      return 'Fill in correct value from -12 to +14'
    } return null
  }

  const validateDateTime = (value:string) => {
    if(!value) {
      return 'Field is required'
    } 
     return null
  }

  const form = useForm({
    initialValues: {
      lat: lat,
      lon: lon,
      elev: elev,
      datetime: datetime,
      zone: zone,
      
    },
    validate: {
      lat: (value) => (validateLat(value)),
      lon: (value) => (validateLong(value)),
      elev: (value) => (validateAlt(value)),
      datetime: (value) => (validateDateTime(value)),
      zone: (value) => (validateZone(value)),
    },
  })

  return (
    <Paper shadow="md" radius="md">
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={form.onSubmit((value) => setSearchParamsFn(value))}>
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
              <TextInput ref={inputFocus}
               {...form.getInputProps('lat')}
              label="Latitude for observer" placeholder="from -90 to +90"
              pointer={true}
              withAsterisk
              key={form.key('lat')}
              />
              <TextInput 
              {...form.getInputProps('lon')}
              label="Longitude for observer" placeholder="from -180 to 180" 
              pointer={true}
              withAsterisk
              key={form.key('lon')}
             />
              <TextInput 
              {...form.getInputProps('elev')}
              label="Altitude for observer in meter" placeholder="Height above sea level (from 0)" 
              pointer={true}
              withAsterisk 
              key={form.key('elev')}
              />
              <TextInput
              {...form.getInputProps('zone')}
              label="Time Zone for observer" placeholder="from -12 to +14"
              pointer={true}
              withAsterisk
              key={form.key('zone')}
            
               />
              <DateTimePicker 
              classNames={{
                calendarHeader: styles.calendarHeader,
                calendarHeaderControl: styles.calendarHeaderControl,
                calendarHeaderLevel: styles.calendarHeaderLevel,
                weekday: styles.weekday,
                day: styles.day,
                section: styles.section,
                timeWrapper: styles.timeWrapper,
                submitButton: styles.submitButton,
                timeInput: styles.timeInput,
              }}
              timePickerProps={{
                  classNames: {
                    field: styles.timePickerField,
                  },
  }}
              dropdownType="modal" 
              size="sm" 
              label="Pick date and time" 
              placeholder="Pick date and time"
              highlightToday={true}
              pointer={true}
              withAsterisk
              key={form.key('datetime')}
              {...form.getInputProps('datetime')}
              
               />
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