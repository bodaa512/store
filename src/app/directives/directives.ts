import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core'

@Directive({
  selector: '[appProductCard]',
  standalone: true
})
export class ProductCardDirective implements OnChanges {

  @Input() shadowSize: string = '10px'

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.borderRadius = '15px'
    this.el.nativeElement.style.boxShadow = '2px 2px 10px gray'
    this.el.nativeElement.style.transition = '0.3s'
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.boxShadow = '5px 5px 25px black'
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.boxShadow = '2px 2px 10px gray'
  }

  ngOnChanges() {
    this.el.nativeElement.style.boxShadow = `2px 2px ${this.shadowSize} gray`
  }
}