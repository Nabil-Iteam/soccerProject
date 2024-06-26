import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  result : String = ''
  transform(ch:string) {
    for (let i = 0; i < ch.length; i++) {
      this.result = ch[i] + this.result;
    }
    return this.result ;
  }

}
