import { Directive, ElementRef, OnInit } from "@angular/core";
// decorator: store meta data about BasicHighlightDirective class 
// it can also store meta data about property or method

@Directive({
    // selector: identify the component
    selector: '[appBasicHighlight]' // using [] means wrap: []not the part of selector name
    // it can be used as an attribut into an element 
})
export class BasicHighlightDirective implements OnInit{
    // elementRef: wrap html element 
    constructor(private elementRef: ElementRef){

    }

    ngOnInit() {
        // native element contan the reference of DOM
        // directly element accessing approach 
        this.elementRef.nativeElement.style.backgroundColor = 'green'
    }

}