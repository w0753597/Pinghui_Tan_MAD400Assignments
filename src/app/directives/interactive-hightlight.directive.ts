import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInteractiveHightlight]'
})
export class InteractiveHightlightDirective {

  private savedBorder: string;
  @Input() from?: string;
  @Input() colour?: string;

  constructor(private elm: ElementRef) { 
    this.savedBorder = elm.nativeElement.style.border;
  }
  
  @HostListener('mouseover') public onMouseOver() {
    if (this.from == "type") {
      this.elm.nativeElement.style.border = "thick dotted #0000FF";
    }
  }

  @HostListener('mouseout') public onMouseOut() {
    if (this.from == "type") {
      this.elm.nativeElement.style.border = this.savedBorder;
    }
  }

  @HostListener('click') public onClick() {
    if (this.from == "id") {
      if (this.elm.nativeElement.style.backgroundColor == this.colour) {
        this.elm.nativeElement.style.backgroundColor = "rgba(0,0,0,0";
      } else {
        this.elm.nativeElement.style.backgroundColor = this.colour;
      }
    }
  }
}
