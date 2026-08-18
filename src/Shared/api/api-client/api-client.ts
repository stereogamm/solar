// import bodies from "../mockApiData/bodies.json"
// import customBodies from "../mockApiData/customPositionBodies.json" 

//mock data fns

// export const getBodies = async () => {
//     await new Promise(res => setTimeout(res, 100))
//     return bodies
// }

// export const getCustomBodies = async () => {
//     await new Promise(res => setTimeout(res, 100))
//     return customBodies
// }

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface RequestOptions {
    method?: Method
    body?: Record<string, unknown>
    headers?: Record <string, string>
    params?: Record<string, string>
}

const baseURL = '/rest'

const defaultHeaders: Record<string, string> = {
    'Content-Type': 'Application/json; charset=utf-8',
}
export async function apiClient(path: string, options: RequestOptions = {}) {
    const { method='GET', body, headers={}, params } = options

    const query = params? `?${new URLSearchParams(params).toString()}` : ''

    const response = await fetch(`${baseURL}/${path}${query}`, {
        method: method,
        headers: {
            ...defaultHeaders,
            ...headers,
        },
        body: ['POST', 'PUT', 'PATCH'].includes(method)? JSON.stringify(body) : undefined
    })

    //400 or 500 errors
    if(!response.ok) {
        try{
            const errorData = await response.json() 
            return {data: null, error: {status: response.status, message: errorData.message}}
        } catch(error) {
            return {data: null, error: {status: response.status, message: response.statusText}}
        }
    }

    const data = await response.json()
    return { data, error: null }
}


export const getBodiesList = async () => {
    const res = await apiClient('bodies')
    if (res.error) {
        return []
    } else {
       return res.data.bodies
    }
}

export const returnCustomPositionBodies = async (params : Record<string, string>) => {
    const res = await apiClient('positions', { params})
    // const res = await getCustomBodies()

    if(res.error) {
        return []
    } else {
        return res.data.positions
    }

    // return res.positions //mock data
}