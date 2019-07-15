import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appHeaderDropdown]'
})
export class HeaderDropdownDirective {
    // @HostBinding('class.open') isOpen = false;
    @HostBinding('class.show') isShow = false;

    @HostListener('click') toggleOpen() {
        // this.isOpen = !this.isOpen;
        this.isShow = !this.isShow;
        this.isShow
            ? document.getElementsByClassName('navbar-dropdown')[0].classList.add('show')
            : document.getElementsByClassName('navbar-dropdown')[0].classList.remove('show');
    }

    // @HostListener('blur') handleBlur() {
    //     document.getElementsByClassName('dropdown-menu')[1].classList.remove('show');
    // }
}