import { Component, EventEmitter, Output } from '@angular/core';
// import { Response } from '@angular/common/http';
import { DataStorageService } from '../shared/data-storage.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // @Output() featureSelected = new EventEmitter<string>();

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }

  // onSelect (feature: string) {
  //   this.featureSelected.emit(feature);
  // }

  onSaveData () {
    this.dataStorageService.storeRecipes()
      .subscribe((response: any) => {
        response instanceof HttpResponse ? console.log('Yes') : console.log('No');
        console.log(`Response: ${JSON.stringify(response)}`);
      },
      error => {
        console.log(`You have an error ${JSON.stringify(error)}`)
      })
  };

  onFetchData () {
    console.log('fetching...');
    this.dataStorageService.getRecipes();
  }
}
