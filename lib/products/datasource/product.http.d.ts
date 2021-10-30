import { AxiosInstance } from "axios";
import { Product, AddProduct } from "../types";
export declare function createHttpProductDataSource(client: AxiosInstance): {
    fetchAll: () => Promise<Product[]>;
    addOne: (product: AddProduct) => Promise<void>;
    deleteOne: (id: string) => Promise<void>;
};
