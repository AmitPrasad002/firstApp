import { Component, OnInit } from '@angular/core';
import {IProduct} from './product'
import { ProductServices } from './prdoct-serevice';

@Component({
selector : 'pm-root',
templateUrl : './product-list.component.html',
styleUrls : ['./product-list.component.css'],
providers:[ProductServices]
})
export class productComponent implements OnInit{
pageTitle : string = 'Product List Management';
imageWidth : number = 50;
imageMargin : number = 5;
showImage :boolean = false;
// listFilter : string = 'cart';
_listFilter :string;
get listFilter():string{
return this._listFilter
}
set listFilter(value :string){
this._listFilter = value;
this.filterProduct= this.listFilter ? this.performFilter(this.listFilter) : this.products
}


filterProduct :IProduct[];
products : IProduct[] = [
{
'productName' : "hammer",
'productCode' : "gsd-0002",
'releaseDate' : "23-march-2012",
'price'       :  '249',
'starRating'  :  '4.2',
'imageUrl'    : 'http://media.openclipart.org/people/GDJ/90px-1546463302.png'
},
{
    'productName' : "mamoaJones",
    'productCode' : "mxd-238",
    'releaseDate' : "03-january-2019",
    'price'       :  '4449',
    'starRating'  :  '2.1',
    'imageUrl'    : 'https://openclipart.org/image/90px/svg_to_png/313073/1546469460.png'
    },
    {
        'productName' : "jenifferwinget",
        'productCode' : "gdmd-2038",
        'releaseDate' : "15-December-2005",
        'price'       :  '905',
        'starRating'  :  '5',
        'imageUrl'    : 'http://media.openclipart.org/people/gringer/90px-1546467915.png'
        }


];
constructor(private ProductServices:ProductServices){}
performFilter(filterBy:string):IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product:IProduct)=>
    product.productName.toLocaleLowerCase().indexOf(filterBy) !==-1)
  
  }

toggleImage():void {
this.showImage=!this.showImage
}
ngOnInit():void{
this.products = this.ProductServices.getProduct();
this.filterProduct = this.products;

}

onRatingClicked (message :string):void{
this.pageTitle = 'product List' + message


}
}