import { useEffect, useState } from 'react'
import { getBodies } from '../../../Shared/api/api-client'
import styles from "../css/bodiesList.module.css"


type Body = {
    id: string,
    name: string,
    isPlanet: boolean,
    bodyType: string,
}

type Bodies = Body[]

type BodyListProps = {
  id: string,
  name: string
}


export const BodiesList = ({id, name} : BodyListProps) => {
      const [bodies, setBodies] = useState<[] | Bodies>([])

useEffect(() => {
    const fetchBodies = async () => {
    const data = await getBodies() 
      setBodies(data.bodies)        
    }

    fetchBodies()
},[])


      return (
    <div className={styles.list}> 
      {bodies.map(body => (
        <div key={id}>{name}</div>
      ))}
    </div>
  )
}