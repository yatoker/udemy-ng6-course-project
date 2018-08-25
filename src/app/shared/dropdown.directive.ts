import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: "[appDropdown]"
})
export class DropdownDirective implements OnInit {
    ngOnInit(): void {
       //throw new Error("Method not implemented.");
    }

    /* ***** My approach *****
        constructor(private elRef: ElementRef, private renderer: Renderer2){       
        }
    
        @HostListener("click") mouseclick(eventData: Event){
    
            if(this.elRef.nativeElement.className.indexOf('open') != -1)
            {
                this.renderer.removeClass(this.elRef.nativeElement, 'open');
            }
            else{
                this.renderer.addClass(this.elRef.nativeElement, 'open');
            }
            
        }
    
    */

    // Other approach

    constructor(private elRef: ElementRef) {
    }

    //Binding a property to class named open and when the bound property changes to false, open class will be removed and vice versa.
    @HostBinding('class.open') isOpen = false;

    @HostListener("click") mouseclick(eventData: Event) {
        this.isOpen = !this.isOpen;
    }



}