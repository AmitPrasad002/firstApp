import { IProduct } from './product';
import { Injectable } from '@angular/core';

@Injectable({
providedIn:'root'
})
export class ProductServices{

    getProduct(): IProduct[] {
        return [
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
            
            
            ]
    }


}
