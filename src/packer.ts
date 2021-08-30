import { processLineByLine } from '../src/utils/readLine'
import ApiError from './error'

export class Packer {
  public static async pack (inputFile: string): Promise<any> {
    try {
      const fileData = await processLineByLine(inputFile)
      const result: any = []
      if (!fileData || JSON.stringify(fileData) === JSON.stringify({})) {
        throw new ApiError(400, 'invalid data')
      }

      const parseOutput = (output: any) => {
        const trimOutput = output.filter((item: string) => item)
        return trimOutput.join('\r\n')
      }

      const getSumPairs = (items: any, maxWeight: string) => {
        var len = items.length
        let sets: any = {}
        for (var i = 0; i < len - 1; i++) {
          for (var j = i + 1; j < len; j++) {
            if (items[i].weight + items[j].weight <= maxWeight) {
              const indexes = `${items[i].index}, ${items[j].index}`
              const values = {
                indexes,
                sumWeight: items[i].weight + items[j].weight,
                sumPrice: items[i].price + items[j].price
              }
              sets[indexes] = values
            }
            const value = {
              indexes: items[i].index,
              sumWeight: items[i].weight,
              sumPrice: items[i].price
            }
            sets[items[i].index] = value
          }
        }
        return sets
      }

      const getSelectedPackages = ({ items }: any) => {
        const values = Object.values(items)
        const max = values.reduce((prev: any, current: any) => {
          return prev.sumPrice > current.sumPrice ? prev : current
        }, 0)
        return max
      }

      const getAppropriatePackageIndex = () => {
        let packageItems: any = []

        // remove any weight of items greater than the maxWeight or item price is greater than 100
        packageItems = fileData.map((packages: any) => {
          const { maxWeight, items } = packages
          return {
            maxWeight,
            items: items.filter(
              (item: any) => item.weight < maxWeight && item.price < 100
            )
          }
        })

        // Do logic for packages with single and multiple items resp.
        packageItems = packageItems.map(({ maxWeight, items }: any) => {
          // Return when maxWeight is greater than 100
          if (maxWeight > 100) {
            return result.push('_')
          }

          if (items.length === 1) {
            result.push(items[0].index)
          }

          if (items.length >= 1) {
            const sumPair = getSumPairs(items, maxWeight)
            const sumPackages = { maxWeight, items: sumPair }
            const newPackage: any = getSelectedPackages(sumPackages)
            result.push(newPackage.indexes)
          }

          if (!items.length) {
            result.push('_')
          }
        })
      }
      getAppropriatePackageIndex()
      return parseOutput(result).split(' ').join('')
    } catch (error) {
      return {
        statusCode: error.statusCode,
        message: error.message
      }
    }
  }
}
