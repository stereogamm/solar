
import type { VercelRequest, VercelResponse } from '@vercel/node'

const apiURL = 'https://api.le-systeme-solaire.net/rest'

const UUID = process.env.UUID


export default async function handler(request: VercelRequest, response: VercelResponse) {

    try{
        const path = request.url?.replace(/^\/api/, '') || ''
        const method = request.method || 'GET'
        const body = ['POST', 'PUT', 'PATCH'].includes(method)? request.body : undefined

         const headers: Record<string, string> = {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${process.env.UUID}`,
         }
   
        const apiResponse = await fetch(`${apiURL}${path}`, {
            method,
            headers,
            body: body? JSON.stringify(body) : undefined,
        })
        const data = await apiResponse.json()

        response.status(apiResponse.status).json(data)
 } catch(error: any) {
    response.status(500).json({
      error: 'Proxy request failed',
      message: error.message,
    })
  }
} 