import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightText'
})
export class HighlightTextPipe implements PipeTransform {

  transform(value: string, query: string, className?: string): any {

    const index = value.toLowerCase().indexOf(query.trim().toLowerCase());
    const queryLength = query.length;

    const highlightedElem = document.createElement('span');
    highlightedElem.innerText = value.slice(index, index + queryLength);
    if (className) {
      highlightedElem.classList.add(className);
    }

    return value.slice(0, index)
      + highlightedElem.outerHTML
      + value.slice(index + queryLength);
  }

}
