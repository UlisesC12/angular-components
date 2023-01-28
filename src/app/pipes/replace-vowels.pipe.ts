import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceVowels'
})
export class ReplaceVowelsPipe implements PipeTransform {

  transform(value: string): string {
    return value.replaceAll(/a/gi, "4").replaceAll(/e/gi, "3").replaceAll(/i/gi, "1").replaceAll(/o/gi, "0").replaceAll(/u/gi, "μ");
  }

}
