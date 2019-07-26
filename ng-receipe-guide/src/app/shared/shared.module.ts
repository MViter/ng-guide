import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from '../shared/dropdown.directive';
import { HeaderDropdownDirective } from '../shared/header-dropdown.directive';

@NgModule({
    declarations: [
        DropdownDirective,
        HeaderDropdownDirective
    ],
    exports: [
        CommonModule,
        DropdownDirective,
        HeaderDropdownDirective
    ]
})

export class SharedModule {}