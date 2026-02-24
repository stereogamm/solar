import bodies from "../mockApiData/bodies.json"

//mock data fn
export const getBodies = async () => {
    await new Promise(res => setTimeout(res, 100))
  
    return bodies
}


//api client without proxy api client
type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface RequestOptions {
    method?: Method
    body?: Record<string, unknown>
    headers?: Record <string, string>
}

const baseURL = '/api'

const defaultHeaders: Record<string, string> = {
    'Content-Type': 'Application/json; charset=utf-8',
}
export async function apiClient(url: string, options: RequestOptions = {}) {
    const { method='GET', body, headers={} } = options

    const response = await fetch(`${baseURL}${url}`, {
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
