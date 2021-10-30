import { Product } from "../types";
export declare function createLocalProductDataSource(list: Product[]): {
    fetchAll: () => Promise<Product[]>;
};
