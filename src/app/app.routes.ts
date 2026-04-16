import { Routes } from '@angular/router'
import { ParentComponent } from './component/parent/parent'
import { ProductDetailsComponent } from './component/product-details/product-details'
import { HomeComponent } from './component/home/home'

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'store', component: ParentComponent },
    { path: 'products/:id', component: ProductDetailsComponent },
    { path: '**', redirectTo: '' }
]