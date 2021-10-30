import { Product } from "../types";

export function createLocalProductDataSource(list:Product[]) {

  async function fetchAll(): Promise<Product[]> {
    return Promise.resolve(list)
  }

  return {
    fetchAll,
  }

}
