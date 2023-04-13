import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInteractiveHightlight]'
})
export class InteractiveHightlightDirective {

  private savedBorder: string;
  @Input() from?: string;

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
}
