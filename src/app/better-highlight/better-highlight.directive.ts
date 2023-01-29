import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  // input decorator allow child component to access the values from parent component and assgin the value into child component property
  @Input() defaultColor: string = "transparent";
  @Input() highlightColor: string = "blue";

    // ('style.backgroundColor') : binding property name
  @HostBinding('style.backgroundColor')  backgroundColor: string = this.defaultColor;



  // directly access the element is not good practice
 // manipulate DOM withoud accessing it
  constructor(private elRef: ElementRef, private renderer: Renderer2) {

   }

   ngOnInit() {
     this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'pink')
   }
   // HostListner: to listen event
   // user define method : mouseOver(), mouseLeave()
   // (' event name ')

   @HostListener ('mouseenter') mouseOver(){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
    this.backgroundColor = this.highlightColor;
   }

   @HostListener ('mouseleave') mouseLeave(){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
    this.backgroundColor = this.defaultColor
   }


}
