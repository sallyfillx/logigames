import { AxiosInstance } from "axios";
import { Product, AddProduct } from "../types";

export function createHttpProductDataSource(client: AxiosInstance) {

  async function fetchAll(): Promise<Product[]> {
    try {
      return (await client.get<Product[]>('products')).data
    } catch (err) {
      if (err instanceof Error) {
        console.error('%s: %s', err.name, err.message)
        console.debug('%o', err)
      }
      throw new Error('Could not fetch products')
    }

  }

  async function addOne(product: AddProduct): Promise<void> {
    try {
      return await client.post('products', product)
    } catch (err) {
      if (err instanceof Error) {
        console.error('%s: %s', err.name, err.message)
        console.debug('%o', err)
      }
      throw new Error('Could not fetch products')
    }
  }

  async function deleteOne(id: string): Promise<void> {
    try {
      return await client.delete(`products/${id}`)
    } catch(err) {
      if (err instanceof Error) {
        console.error('%s: %s', err.name, err.message)
        console.debug('%o', err)
      }
      throw new Error('Could not fetch products')
    }
  }

  return {
    fetchAll,
    addOne,
    deleteOne
  }

}
