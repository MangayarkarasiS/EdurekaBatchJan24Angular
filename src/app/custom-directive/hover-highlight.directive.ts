import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {

  constructor(private element:ElementRef) { }
  @HostListener('mouseenter')
  anyNameMouseEnter():void{
    this.element.nativeElement.style.backgroundColor='yellow';
  }
  @HostListener('mouseleave')
  anyNameMouseExit():void{
    this.element.nativeElement.style.backgroundColor='initial';
  }


}
