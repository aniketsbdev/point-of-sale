import { Component, OnInit, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';
import { MatTable } from '@angular/material/table';
import { MatTabGroup } from '@angular/material/tabs';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sale-window',
  templateUrl: './sale-window.component.html',
  styleUrls: ['./sale-window.component.scss']
})
export class SaleWindowComponent implements OnInit {

  @ViewChild('productTable') productTable: MatTable<any>;
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

  constructor() { }

  ngOnInit(): void {
    this.getSearchArray();
    this.filteredProducts = this.done;
  }

  todo = [

  ];

  done = [
    {
      sno: 1,
      category: 'pc',
      quantity: 2,
      task: 'Get to work'
    },
    {
      sno: 2,
      category: 'pc',
      quantity: 2,
      task: 'Pick up groceries'
    },
    {
      sno: 3,
      category: 'notpc',
      quantity: 2,
      task: 'Go home'
    },
    {
      sno: 4,
      category: 'notpc',
      quantity: 2,
      task: 'Fall asleep'
    },
    {
      sno: 5,
      category: 'notpc',
      quantity: 2,
      task: 'Get up'
    },
    {
      sno: 6,
      category: 'pc',
      quantity: 2,
      task: 'Brush teeth'
    },
    {
      sno: 7,
      category: 'notpc',
      quantity: 2,
      task: 'Take a shower'
    },
    {
      sno: 8,
      category: 'pc',
      quantity: 2,
      task: 'Check e-mail'
    },
    {
      sno: 9,
      category: 'pc',
      quantity: 2,
      task: 'Walk dog'
    },
  ];

  filteredProducts = [];

  getSearchArray() {
    this.searchTerm.valueChanges
      .subscribe(
        value => {
          let newProductList = [];
          newProductList = this.done.filter(product => {
            return product.category.includes(value);
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
      console.log(event.previousContainer.data[event.previousIndex]['quantity']);
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
