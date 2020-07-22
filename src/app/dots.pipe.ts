import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "dots",
})
export class DotsPipe implements PipeTransform {
  transform(value: string, num: number = 10): string {
    if (value.length > num) {
      value = value.slice(0, num) + "...";
    }
    return value;
  }
}
