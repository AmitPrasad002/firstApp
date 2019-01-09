import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
name:'customPipes'

})
export class customPipes implements PipeTransform {

     transform(value:string, character:string):string{
        
return value.replace(character, ' ')
    }


}