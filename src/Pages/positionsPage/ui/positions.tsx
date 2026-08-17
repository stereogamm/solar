import { UserForm } from '../../../Shared/ui/userForm/ui/userForm'
import { useSearchParams } from "react-router";
import { useCustomPositionBodiesStore } from '../../../stores/useCustomPositionBodies';

export type Position = {
      name: string,
      ra: string,
      dec: string
      az: string,
      alt: string
    }

export type Location = {
    latitude: number,
    longitude: number,
    elevation: number,
    timezone: number,
  }

export type TimeInfo = {
    calculated_for_utc: string,
    local_time_display: string,
    universal_time_ut: string,
    universal_time_decimal: number,
    julian_day: number,
    day_number_j2000: number,
    greenwich_sidereal_time: string,
    local_sidereal_time: string,
    gst_decimal: number,
    lst_decimal: number
  }

export type PositionApiResponse = {
    positions: Position[],
    location: Location,
    time_info: TimeInfo,
}

export type Positions = Position[]

export const Positions = () => {
    const [searchParams, setSearchParams] = useSearchParams()

  const fetchBodies = useCustomPositionBodiesStore((store) => store.getCustomBodies);
  const bodyList = useCustomPositionBodiesStore((store) => store.bodies); 
  const loading = useCustomPositionBodiesStore((store) => store.loading);

    const initialValue = {
        lat: searchParams.get('lat') ?? '',
        lon: searchParams.get('lon') ?? '',
        elev: searchParams.get('elev') ?? '',
        datetime: searchParams.get('datetime') ?? '',
        zone: searchParams.get('zone') ?? '',
    }

const handleSubmit = () => {
    fetchBodies(initialValue)
}

    return (
        <>
        <UserForm initialValue={initialValue} setSearchParamsFn={(value) => setSearchParams(value)}/>
            <button onClick={handleSubmit} >get bodies</button>
            {loading && <div>loading...</div>}
            {bodyList?.map((body) => {
                return <div key={body.name}>{body.name}</div>
            })}
        </>
        

    )
}