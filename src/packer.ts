import { processLineByLine } from '../src/utils/readLine'
import APIException from './error'

export class Packer {
  public static async pack (inputFile: string): Promise<any> {
    try {
      const fileData: any = await processLineByLine(inputFile)
      const result: any[] = []

      if (!fileData || JSON.stringify(fileData) === JSON.stringify({})) {
        throw new APIException(400, 'invalid data')
      }

      // parses output as a string
      const parseOutput = (output: any[]) => {
        const trimOutput = output.filter((item: string) => item)
        return trimOutput
          .join('\r\n')
          .split(' ')
          .join('')
      }

      // get sum of packages less than maxWeight and also return individual packages
      const getPackagesSum = (items: any[], maxWeight: string) => {
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

      const getSelectedPackages = (items: any) => {
        const values = Object.values(items)
        // get package with highest price
        const max = values.reduce((prev: any, current: any) => {
          return prev.sumPrice > current.sumPrice ? prev : current
        }, 0)
        return max
      }

      const filterByWeightAndCost = () => {
        // Removes any weight of items greater than the maxWeight or item price is greater than 100
        return fileData.map((packages: any) => {
          const { maxWeight, items } = packages
          return {
            maxWeight,
            items: items.filter(
              (item: any) => item.weight < maxWeight && item.price < 100
            )
          }
        })
      }

      // Main function that returns the selected packages
      const selectValidPackagesByWeightAndPrice = () => {
        const packages: any[] = filterByWeightAndCost()
        // logic for packages with single and multiple items resp.
        packages.map(({ maxWeight, items }: any) => {
          // returns "_" when maxWeight is greater than 100
          if (maxWeight > 100) {
            return result.push('_')
          }
          // returns "_" when no items in the package
          if (!items.length) {
            return result.push('_')
          }
          // returns the first index for packages with only one item
          if (items.length === 1) {
            result.push(items[0].index)
          }
          // items with multiple packages
          if (items.length >= 1) {
            const packagesSum = getPackagesSum(items, maxWeight)
            const { indexes }: any = getSelectedPackages(packagesSum)
            result.push(indexes)
          }
        })
      }
      // calls the function to get appropriate packages
      selectValidPackagesByWeightAndPrice()

      return parseOutput(result)
    } catch (error:any) {
      return {
        statusCode: error.statusCode,
        message: error.message
      }
    }
  }
}
