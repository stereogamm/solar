import bodies from "./mockApiData/bodies.json"


export const getBodies = async () => {
    await new Promise(res => setTimeout(res, 1000))
  
    return bodies
}