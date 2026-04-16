import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { IProduct } from '../../models/iproduct'
import { ProductService } from '../../service/product.service'

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent implements OnInit {

  ClientName: string = "Ahmed Mohamed"
  ProductList: IProduct[] = []
  filteredProducts: IProduct[] = []
  selectedCatID: number = 0
  isPurchased: boolean = false
  discount: string = "20%"
  storeLogo: string = "https://cdn-icons-png.flaticon.com/512/60/60814.png"

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.ProductList = this.productService.getAllProducts()
    this.filteredProducts = this.ProductList
  }

  filterByCategory(): void {
    if (this.selectedCatID === 0) {
      this.filteredProducts = this.ProductList
    } else {
      this.filteredProducts = this.ProductList.filter(
        (p: IProduct) => p.categoryID === Number(this.selectedCatID)
      )
    }
  }

  buyItem(prod: IProduct): void {
    if (prod.quantity > 0) {
      prod.quantity--
    }
  }

  togglePurchase(): void {
    this.isPurchased = !this.isPurchased
  }

}