import { Component, EventEmitter, Output } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelect (feature: string) {
    this.featureSelected.emit(feature);
  }

}
