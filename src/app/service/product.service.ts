import { Injectable } from '@angular/core'
import { IProduct } from '../models/iproduct'
import productsData from '../component/data/data'

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  getAllProducts(): IProduct[] {
    return productsData
  }

  getProductsByCatID(catID: number): IProduct[] {
    return productsData.filter((p: { categoryID: number }) => p.categoryID === catID)
  }

  getProductByID(prodID: number): IProduct | undefined {
    return productsData.find(p => p.id === prodID)
  }

}