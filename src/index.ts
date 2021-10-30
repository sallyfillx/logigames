import { productLocalDataSource, productHttpDataSource } from './products/di'

async function wait(ms = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}


async function run() {

  const localProductList = (await productLocalDataSource.fetchAll()).slice(0, 10)

  for( const product of localProductList) {
    await wait(1000)
    console.log(`Duplicating product ${product.product_id} (${product.product_model})`)
    productHttpDataSource.addOne({
      product_model: `__TEST__${product.product_model}`,
      product_barcode: `${product.product_barcode}${ product.product_barcode}`,
      product_brand: product.product_brand,
      product_category: product.product_category,
      product_discount_price: product.product_discount_price,
      product_package: (product as any).product_package,
      product_price: product.product_price,
      product_size_type: product.product_size_type,
      product_stock_management: 1,
      product_supplier: product.product_supplier,
      product_supplier_reference: product.product_supplier_reference,
      product_supply_price: product.product_supply_price,
      product_vat: product.product_vat,
      products_ref_ext: (product as any).products_ref_ext
    })
  }
}


;(async (): Promise<void> => {
  try {
    await run();
  } catch (error: any) {
    console.error('%s: %s', error.name, error.message)
    console.error('%o', error)
  }
})()
