import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  hideResults: boolean = true;

  results = [
    {
      id: 1,
      name: 'Alan',
    },
    {
      id: 2,
      name: 'Rodrigo',
    },
    {
      id: 3,
      name: 'Santiago',
    },
  ];

  viewButtonClick() {
    this.hideResults = !this.hideResults;
  }
}
