import { Component, Input, OnChanges, Output , EventEmitter} from '@angular/core';


@Component({
selector:'pm-star',
templateUrl:'./starRating.html',
styleUrls : ['./starRating.css']
})
export class starRating implements OnChanges{
@Input() rating:number;
starWidth:number
@Output() ratingClicked : EventEmitter<string> = 
new EventEmitter<string>();
ngOnChanges():void{
    this.starWidth = this.rating* 75/5
}

onClick(): void{
    this.ratingClicked.emit(`: the star Rating ${this.rating} was clicked`)
    
    }
}