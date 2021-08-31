# Package Challenge

## Introduction
You want to send your friend a package with different things.
Each thing you put inside the package has such parameters as index number, weight and cost. The package has a weight limit. Your goal is to determine which things to put into the package so that the total weight is less than or equal to the package limit and the total cost is as large as possible.
You would prefer to send a package which weighs less in case there is more than one package with the same price.

## Input Sample
```
81 : (1,53.38,€45) (2,88.62,€98) (3,78.48,€3) (4,72.30,€76) (5,30.18,€9) (6,46.34,€48)
8 : (1,15.3,€34)
75 : (1,85.31,€29) (2,14.55,€74) (3,3.98,€16) (4,26.24,€55) (5,63.69,€52) (6,76.25,€75) (7,60.02,€74) (8,93.18,€35) (9,89.95,€78)
56 : (1,90.72,€13) (2,33.80,€40) (3,43.15,€10) (4,37.97,€16) (5,46.81,€36) (6,48.77,€79) (7,81.80,€45) (8,19.36,€79) (9,6.76,€64)
```

## Output Sample
```
4
- 
2,7 
8,9
```

## Get Started
$ git clone `git@github.com:Oluwafayokemi/Package-Challenge.git`

## Set up Guide
- cd into the newly cloned folder
- on your terminal run
```
npm install 
```
To install all packages
```
npm run start:dev 
```

To test 
```
npm test
 ```
## Example Reqeusts
- `GET` http://localhost:8080/packer?filePath=resources/example_input

## Development process
- Test driven development(Tdd) is used
- Qaudratic - O(a*b) time complexity

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
