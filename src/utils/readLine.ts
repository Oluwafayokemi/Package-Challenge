import fs from 'fs'
import readline from 'readline'
import { once } from 'events'

const parseFile = (file: any) => {
  if (!file || JSON.stringify(file) === JSON.stringify({})) {
    return null
  }

  return Object.entries(file).map((newEntry: any) => {
    return {
      maxWeight: JSON.parse(newEntry[0]).maxWeight,
      items: newEntry[1].map((entry: any) => {
        return {
          index: entry[0],
          weight: entry[1],
          price: entry[2]
        }
      })
    }
  })
}

export const processLineByLine = async (inputFile: string) => {
  const file: any = {}
  try {
    const readLine = readline.createInterface({
      input: fs.createReadStream(inputFile),
      crlfDelay: Infinity
    })

    readLine.on('line', line => {
      if (!line.split(':')[1]) {
        return null
      }
      const key: any = `${line
        .split(':')[0]
        .trim()
        .replace(/^/, '{"maxWeight" : ')} }`
      const value = line
        .split(':')[1]
        .trim()
        .replace(/\(/g, '[')
        .replace(/\)/g, '],')
        .replace(/\€/g, '')
      const parsedValue = value.substring(0, value.length - 1)
      file[key] = JSON.parse('[' + parsedValue + ']')
    })

    await once(readLine, 'close')

    return parseFile(file)
  } catch (error) {
    return error
  }
}
