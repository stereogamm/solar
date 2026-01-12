import { useEffect, useState } from 'react'
import { getBodies } from '../../../Shared/api/api-client'
import { PlanetCard } from "../../../Widgets/card/index"
import styles from "../css/bodiesList.module.css"
import { LoaderCustom } from '../../../Shared/ui/loader'


type Body = {
    id: string,
    name: string,
    isPlanet: boolean,
    bodyType: string,
    englishName: string,
    discoveredBy: string,
}

type Bodies = Body[]

// type BodyListProps = {
//   id: string,
//   name: string
// }


export const BodiesList = () => {
      const [bodies, setBodies] = useState<null | Bodies>(null)
      const [loading, setLoading] = useState(true)


useEffect(() => {
    const fetchBodies = async () => {
    const data = await getBodies() 
      setBodies(data.bodies) 
      setLoading(false)     
    }
fetchBodies()
 },[])

 if(loading) {
   return (
    <div className={styles.loader}> 
     <LoaderCustom />
   </div>
    )
 }

      return (
    <div className={styles.list}> 
      {bodies?.map(body => (
        <div key={body.id}>
           <PlanetCard name={body.name} englishName={body.englishName} discoveredBy={body.discoveredBy}/>
        </div>
      ))}
    </div>
  )
}