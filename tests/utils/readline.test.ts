import { processLineByLine } from '../../src/utils/readLine'

describe('readline', () => {
  it('should parse the file line by line', async () => {
    const data = await processLineByLine('resources/example_input')
    const expectedOutput = [
      {
        items: [
          { index: 1, price: 45, weight: 53.38 },
          { index: 2, price: 98, weight: 88.62 },
          { index: 3, price: 3, weight: 78.48 },
          { index: 4, price: 76, weight: 72.3 },
          { index: 5, price: 9, weight: 30.18 },
          { index: 6, price: 48, weight: 46.34 }
        ],
        maxWeight: 81
      },
      { items: [{ index: 1, price: 34, weight: 15.3 }], maxWeight: 8 },
      {
        items: [
          { index: 1, price: 29, weight: 85.31 },
          { index: 2, price: 74, weight: 14.55 },
          { index: 3, price: 16, weight: 3.98 },
          { index: 4, price: 55, weight: 26.24 },
          { index: 5, price: 52, weight: 63.69 },
          { index: 6, price: 75, weight: 76.25 },
          { index: 7, price: 74, weight: 60.02 },
          { index: 8, price: 35, weight: 93.18 },
          { index: 9, price: 78, weight: 89.95 }
        ],
        maxWeight: 75
      },
      {
        items: [
          { index: 1, price: 13, weight: 90.72 },
          { index: 2, price: 40, weight: 33.8 },
          { index: 3, price: 10, weight: 43.15 },
          { index: 4, price: 16, weight: 37.97 },
          { index: 5, price: 36, weight: 46.81 },
          { index: 6, price: 79, weight: 48.77 },
          { index: 7, price: 45, weight: 81.8 },
          { index: 8, price: 79, weight: 19.36 },
          { index: 9, price: 64, weight: 6.76 }
        ],
        maxWeight: 56
      }
    ]
    expect(data).toStrictEqual(expectedOutput)
  })
})
