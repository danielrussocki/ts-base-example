/* packages */
import { verify, sign } from 'jsonwebtoken'
import { compare } from 'bcrypt-nodejs'

export function comparePasswordMiddleware(password: string, hash: string) {
  return new Promise((resolve, reject) => {
    compare(password, hash, (error, isMatch) => {
      if (error) return reject(error)
      resolve(isMatch)
    })
  })
}

export { verify as tokenVerify, sign as tokenSign }
