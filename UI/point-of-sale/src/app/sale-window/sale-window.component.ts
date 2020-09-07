import { Component, OnInit, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';
import { MatTable } from '@angular/material/table';
import { MatTabGroup } from '@angular/material/tabs';
import { FormControl, Validators } from '@angular/forms';
import { NetworkService } from '../services/network.service';
import { SelectionChange } from '@angular/cdk/collections';

@Component({
  selector: 'app-sale-window',
  templateUrl: './sale-window.component.html',
  styleUrls: ['./sale-window.component.scss']
})
export class SaleWindowComponent implements OnInit {

  @ViewChild('productTable') productTable: MatTable<any>;
  @ViewChild(MatTabGroup) tabGroup: MatTabGroup;
  displayedColumns: string[] = ['position'];
  categories: any[] = [
    {
      sNo: 0,
      category: "All"
    },
    {
      sNo: 1,
      category: "Computers"
    }, {
      sNo: 2,
      category: "Fruits"
    }, {
      sNo: 3,
      category: "Clothing"
    },
  ]
  searchTerm = new FormControl('');
  productList: any;
  dataLoaded = false;
  constructor(private network: NetworkService) { }

  ngOnInit(): void {
    this.network.getAllProducts().subscribe(productList => {
      this.productList = productList['data'];
      console.log(productList['data'], this.productList);
      this.dataLoaded = true;
      this.getSearchArray();
      this.filteredProducts = this.productList;
    })
  }

  todo = [
  ];

  changeCategory(event: any) {
    console.log(event);
    let currentList = [];
    if (event.index == 0) {
      currentList = this.productList;
    } else if (event.index == 1) {
      currentList = this.productList.filter(product => {
        return product.category == "computers"
      });
    } else if (event.index == 2) {
      currentList = this.productList.filter(product => {
        return product.category == "fruits"
      });
    } else if (event.index == 3) {
      currentList = this.productList.filter(product => {
        return product.category == "clothing"
      });
    }
    this.filteredProducts = currentList;
  }

  filteredProducts = [];

  getSearchArray() {

    this.searchTerm.valueChanges
      .subscribe(
        value => {
          console.log(this.tabGroup.selectedIndex);
          let newProductList = [];
          if (this.tabGroup.selectedIndex == 0) {
            newProductList = this.productList;
          } else if (this.tabGroup.selectedIndex == 1) {
            newProductList = this.productList.filter(product => {
              return product.category == "computers"
            });
          } else if (this.tabGroup.selectedIndex == 2) {
            newProductList = this.productList.filter(product => {
              return product.category == "fruits"
            });
          } else if (this.tabGroup.selectedIndex == 3) {
            newProductList = this.productList.filter(product => {
              return product.category == "clothing"
            });
          }
          this.filteredProducts = newProductList;
          newProductList = this.filteredProducts.filter(product => {
            return product.productName.toLowerCase().includes(value.toLowerCase());
          });
          this.filteredProducts = newProductList;
        }
      );
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      console.log("1st if");

      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event.previousContainer.data[event.previousIndex], event.previousIndex);
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
