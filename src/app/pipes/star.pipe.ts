import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star'
})
export class StarPipe implements PipeTransform {
  voyels = ["a","e","y","u","i","o","A","E","Y","U","I","O"]
  ch : string = ""
  result = ""

  transform(ch: string){
  for (let i = 0; i < ch.length; i++) {
    let inter = ch[i]
    for (let j = 0; j < this.voyels.length; j++) {
      
    if (ch[i]==this.voyels[j]) {
      inter = "*";
      break;
    } 
    }
    this.result = this.result + inter ;
  }
  return this.result;
  }

}
