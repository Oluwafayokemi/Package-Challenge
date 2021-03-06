import fs from 'fs'

export const fileExists = (file:string) => {
  try {
    fs.accessSync(file, fs.constants.R_OK | fs.constants.W_OK)
    return true
  } catch (err) {
    return false
  }
}
