import { definitions, operations } from "./hiboutik"

export type Product = definitions['product']
export type AddProduct = operations['api.products.add']['parameters']['formData']