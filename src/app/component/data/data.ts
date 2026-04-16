import { IProduct } from "../../models/iproduct"

const productsData: IProduct[] = [
  {
    id: 1,
    name: "MacBook Pro M3 Max 16\"",
    price: 3499,
    quantity: 5,
    categoryID: 2,
    purchaseDate: new Date("2024-03-01"),
    imgURL: "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/1.png"
  },
  {
    id: 2,
    name: "iPhone 15 Pro Titanium",
    price: 1199,
    quantity: 12,
    categoryID: 2,
    purchaseDate: new Date("2024-03-02"),
    imgURL: "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/1.png"
  },
  {
    id: 3,
    name: "Sony WH-1000XM5 Headphones",
    price: 398,
    quantity: 8,
    categoryID: 3,
    purchaseDate: new Date("2024-03-03"),
    imgURL: "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20A57/1.png" /* Placeholder, dummyjson has limited headphones */
  },
  {
    id: 4,
    name: "Sony PlayStation 5 Console",
    price: 499,
    quantity: 0,
    categoryID: 2,
    purchaseDate: new Date("2024-03-04"),
    imgURL: "https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/1.png"
  },
  {
    id: 5,
    name: "Samsung Galaxy S24 Ultra",
    price: 1299,
    quantity: 15,
    categoryID: 2,
    purchaseDate: new Date("2024-03-05"),
    imgURL: "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S21/1.png"
  },
  {
    id: 6,
    name: "Apple Watch Series 9",
    price: 399,
    quantity: 20,
    categoryID: 3,
    purchaseDate: new Date("2024-03-06"),
    imgURL: "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/1.png"
  },
  {
    id: 7,
    name: "Logitech MX Master 3S",
    price: 99,
    quantity: 30,
    categoryID: 2,
    purchaseDate: new Date("2024-03-07"),
    imgURL: "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20MagSafe%20Battery%20Pack/1.png"
  },
  {
    id: 8,
    name: "Keychron K2 Mechanical Keyboard",
    price: 89,
    quantity: 10,
    categoryID: 2,
    purchaseDate: new Date("2024-03-08"),
    imgURL: "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/1.png"
  },
  {
    id: 9,
    name: "Canon EOS R5 Mirrorless Camera",
    price: 3899,
    quantity: 2,
    categoryID: 2,
    purchaseDate: new Date("2024-03-09"),
    imgURL: "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/1.png"
  },
  {
    id: 10,
    name: "iPad Pro 12.9-inch (M2)",
    price: 1099,
    quantity: 7,
    categoryID: 2,
    purchaseDate: new Date("2024-03-10"),
    imgURL: "https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/2.png"
  },
  {
    id: 11,
    name: "DJI Mini 3 Pro Drone",
    price: 759,
    quantity: 4,
    categoryID: 2,
    purchaseDate: new Date("2024-03-11"),
    imgURL: "https://cdn.dummyjson.com/products/images/laptops/HP%20Pavilion%2015-DK1056WM/1.png"
  },
  {
    id: 12,
    name: "Bose QuietComfort Earbuds II",
    price: 299,
    quantity: 1,
    categoryID: 3,
    purchaseDate: new Date("2024-03-12"),
    imgURL: "https://cdn.dummyjson.com/products/images/motorcycle/Generic%20Motorcycle/1.png"
  }
]

export default productsData