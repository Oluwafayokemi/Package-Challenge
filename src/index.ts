import express, { Request, Response } from 'express'
import { Packer } from './packer'
import path from 'path'
import APIException from './error'
import { fileExists } from './utils/validation'

const app = express()
const port = 8080

app.get('/', (req: Request, res: Response) => {
  res.json('Hello world!')
})

app.get('/packer', async (req: Request, res: Response) => {
  try {
    const isQueryProvided = JSON.stringify(req.query) !== JSON.stringify({})

    if (!(isQueryProvided && req.query.filePath)) {
      throw new APIException(400, 'Please provide a valid file')
    }
    const filePath = path.join(process.cwd(), req.query.filePath as string)

    if (!fileExists(filePath)) {
      throw new APIException(400, 'Please provide a valid file')
    }
    const result = await Packer.pack(filePath)
    res.json(result)
  } catch (error:any) {
    res.json({
      statusCode: error.statusCode,
      message: error.message
    })
  }
})

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})

export default app
