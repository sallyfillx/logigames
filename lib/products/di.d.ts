export declare const client: import("axios").AxiosInstance;
export declare const productHttpDataSource: {
    fetchAll: () => Promise<{
        product_id: number;
        product_model: string;
        product_barcode: string;
        product_brand: number;
        product_supplier: number;
        product_price: string;
        product_discount_price: string;
        product_supply_price: string;
        product_category: number;
        product_size_type: number;
        product_stock_management: number;
        product_supplier_reference: string;
        product_vat: number;
    }[]>;
    addOne: (product: {
        product_model?: string | undefined;
        product_barcode?: string | undefined;
        product_brand?: number | undefined;
        product_supplier?: number | undefined;
        product_price?: string | undefined;
        product_discount_price?: string | undefined;
        product_supply_price?: string | undefined;
        product_category?: number | undefined;
        product_size_type?: number | undefined;
        product_stock_management?: number | undefined;
        product_supplier_reference?: string | undefined;
        product_package?: number | undefined;
        product_vat?: number | undefined;
        products_ref_ext?: string | undefined;
    }) => Promise<void>;
    deleteOne: (id: string) => Promise<void>;
};
export declare const productLocalDataSource: {
    fetchAll: () => Promise<{
        product_id: number;
        product_model: string;
        product_barcode: string;
        product_brand: number;
        product_supplier: number;
        product_price: string;
        product_discount_price: string;
        product_supply_price: string;
        product_category: number;
        product_size_type: number;
        product_stock_management: number;
        product_supplier_reference: string;
        product_vat: number;
    }[]>;
};
