import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: 'star'
})
export class StarPipe implements PipeTransform{

  transform(value: string): string{
    return `12**${value}**21`;
  }
}
