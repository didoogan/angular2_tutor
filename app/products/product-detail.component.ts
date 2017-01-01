import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    // selector: 'pm-dich',
     moduleId: module.id,
    // templateUrl: 'app/products/product-detail.component.html';
    templateUrl: 'product-detail.component.html'
    // template: `
    //     <h2>DIch</h2>
    //     <p>{{ pageTitle }}</p>
    // `
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Super product';
    product: IProduct;

    constructor(private _route: ActivatedRoute, 
        private _router: Router,
        private _productService: ProductService) {}

    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
        // this.pageTitle = id;
        this.getProduct(id);
    }
    onBack(): void {
        this._router.navigate(['/products']);
    }
    getProduct(id: number): void {
        this._productService.getProduct(id).subscribe(
            product => this.product = product,
            error => console.log(error)
        );
    }
}