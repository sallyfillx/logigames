import axios from 'axios'
import { createHttpProductDataSource } from './datasource/product.http'
import { createLocalProductDataSource } from './datasource/product.local'
import * as localProductList from './datasource/product.local.json'

export const client = axios.create({
    baseURL: `https://logigamessas.hiboutik.com/api`,
    headers: {
        Accept: 'application/json',
    },
    auth: {
        username: 'changeme',
        password: 'changeme'
    }
})

console.log({
  createLocalProductDataSource
})

export const productHttpDataSource = createHttpProductDataSource(client)
export const productLocalDataSource = createLocalProductDataSource(localProductList)
