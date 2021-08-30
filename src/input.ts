// const examples = {
//   81: [
//    + [1, 53.38, 45],-
//     // [2, 88.62, 98],
//    + [3, 78.48, 3], -
//   +  [4, 72.3, 76], -
//    + [5, 30.18, 9],- 76
//     +[6, 46.34, 46.34] -
//   ],
//   8: [[1, 15.3, 34]],
//   75: [
//     // [1, 85.31, 29],
//     [2, 14.55, 74],
//    - [3, 3.98, 16], 66
//     [4, 26.24, 55],
//    - [5, 63.69, 52],
//     // [6, 76.25, 75],
//     - [7, 60.02, 74],
//     // [8, 93.18, 35],
//     // [9, 89.95, 78]
//   ],
//   56: [
//     // [1, 90.72, 13],
//     [2, 33.8, 40],
//     [3, 43.15, 10],
//     [4, 37.97, 16],
//     [5, 46.81, 36],
//     - [6, 48.77, 79],
//     // [7, 81.8, 45],
//     [8, 19.36, 79],
//     [9, 6.76, 64] 54
//   ]
// }
// For a single array, check if weight is less than or equal to the totalWeight, if not retun false
// Loop through the values and discard anyone greater than the total weight
// Concatenate the highest to the lowest, if the sum is greater than the total weight, return false
// continue
// The final sum that is less than or equal to the total weight, compare with the highest weight value
// if the addition is lower than the limit, add the next lowest

const output = [
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
