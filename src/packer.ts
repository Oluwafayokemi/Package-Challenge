import { processLineByLine } from '../src/utils/readLine'
import ApiError from './error'

export class Packer {
  public static async pack (inputFile: string): Promise<any> {
    try {
      const fileData = await processLineByLine(inputFile)
      
      if (!fileData || JSON.stringify(fileData) === JSON.stringify({})) {
        throw new ApiError(400, 'invalid data')
      }

      const parseOutput = (output: any) => {
        return output.join('\r\n')
      }
    } catch (error) {
      return {
        statusCode: error.statusCode,
        message: error.message
      }
    }
  }
}
