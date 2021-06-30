import { PipeTransform } from "@angular/core";
import { Pipe } from "@angular/core";

@Pipe({
  name: 'mult'
})
export class MultByPipe implements PipeTransform {
  transform(num: number, pow: number = 2): number {
    return num * pow
  }
}
