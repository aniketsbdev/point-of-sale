import { Component, OnInit, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatTable } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-sale-window',
  templateUrl: './sale-window.component.html',
  styleUrls: ['./sale-window.component.scss']
})
export class SaleWindowComponent implements OnInit {

  @ViewChild('productTable') productTable: MatTable<any>;
  displayedColumns: string[] = ['position'];
  dataSource = ELEMENT_DATA;

  constructor(private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit(): void {

  }

  todo = [
    {
      sno: 1,
      task: 'Get to work'
    },
    {
      sno: 2,
      task: 'Pick up groceries'
    },
    {
      sno: 3,
      task: 'Go home'
    },
    {
      sno: 4,
      task: 'Fall asleep'
    }
  ];

  done = [
    {
      sno: 5,
      task: 'Get up'
    },
    {
      sno: 6,
      task: 'Brush teeth'
    },
    {
      sno: 7,
      task: 'Take a shower'
    },
    {
      sno: 8,
      task: 'Check e-mail'
    },
    {
      sno: 9,
      task: 'Walk dog'
    },
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

  }


}
