# mobiquity-test

### Package Challenge

## Development process
- Test driven development(Tdd) was used
- Qaudratic - O(a*b) time complexity (can be improved greatly)

## Code Stragtegy/Algorithm
* Validates that req.query exists and the file path is valid
* Reads input file lines
* Parses the text file to the shape of the data structure below
* Checks that data is being returned in the packer file
* From the package array, excludes items that have weight and cost greater than 100
* Returns "_" when maxWeight is greater than 100
* Returns "_" when no items in the package
* Returns the first index for package with one item
* For package with multiple items
* Loops through each of the items and sums the weight and returns the indexes of the sum, their summed weight and summed prices respectively
* Compares the packages and selects based on the highest price of both summed items and individual items of each packages
* Returns the index/es of the selected packages
 
## DataStructure
- Array of Objects

Example of Data structure used:
```
const package = [
  {
    maxWeight: 81,
    items: [
      { index: 1, weight: 53.38, cost: 45 },
      { index: 2, weight: 88.62, cost: 98 },
      { index: 3, weight: 78.48, cost: 3 },
      { index: 4, weight: 72.3, cost: 76 },
      { index: 5, weight: 30.18, cost: 9 },
      { index: 6, weight: 46.34, cost: 46.34 }
    ]
  },
  {
    maxWeight: 8,
    items: [{ index: 1, weight: 15.3, cost: 34 }]
  },
  {
    maxWeight: 75,
    items: [
      { index: 1, weight: 85.31, cost: 29 },
      { index: 2, weight: 14.55, cost: 74 },
      { index: 3, weight: 3.98, cost: 16 },
      { index: 4, weight: 26.24, cost: 55 },
      { index: 5, weight: 63.69, cost: 52 },
      { index: 6, weight: 76.25, cost: 75 },
      { index: 7, weight: 60.02, cost: 74 },
      { index: 8, weight: 93.18, cost: 35 },
      { index: 9, weight: 89.95, cost: 78 }
    ]
  },
  {
    maxWeight: 56,
    items: [
      { index: 1, weight: 90.72, cost: 13 },
      { index: 2, weight: 33.8, cost: 40 },
      { index: 3, weight: 43.15, cost: 10 },
      { index: 4, weight: 37.97, cost: 16 },
      { index: 5, weight: 46.81, cost: 36 },
      { index: 6, weight: 48.77, cost: 79 },
      { index: 7, weight: 81.8, cost: 75 },
      { index: 8, weight: 19.36, cost: 79 },
      { index: 9, weight: 6.76, cost: 64 }
    ]
  }
]

```
