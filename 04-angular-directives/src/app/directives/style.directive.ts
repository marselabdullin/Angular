import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core'

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('appStyle') color: string = 'blue'
  @Input() fontWeight: string = 'normal'
  @Input() dStyles?: {border?: string, borderRadius?: string}

  @HostBinding('style.color') elColor: string | null = null

  constructor(private el: ElementRef, private r: Renderer2) {
    // this.r.setStyle(this.el.nativeElement, 'color', 'blue')
  }

  @HostListener('click', ['$event.target']) onClick(target: EventTarget) {
    console.log(target)
  }

  @HostListener('mouseenter') onEnter() {
    // this.r.setStyle(this.el.nativeElement, 'color', this.color)
    this.elColor = this.color
    this.r.setStyle(this.el.nativeElement, 'fontWeight', this.fontWeight)
    this.r.setStyle(this.el.nativeElement, 'border', this.dStyles?.border)
    this.r.setStyle(this.el.nativeElement, 'borderRadius', this.dStyles?.borderRadius)
  }

  @HostListener('mouseleave') onLeave() {
    // this.r.setStyle(this.el.nativeElement, 'color', null)
    this.elColor = null
    this.r.setStyle(this.el.nativeElement, 'fontWeight', null)
    this.r.setStyle(this.el.nativeElement, 'border', null)
    this.r.setStyle(this.el.nativeElement, 'borderRadius', null)
  }
}
