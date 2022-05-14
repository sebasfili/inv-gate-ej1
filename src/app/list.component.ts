import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'list',
  template: `
    <h1>This is a component with a template</h1>
    <ng-container
      *ngFor="let oneItem of results"
      [ngTemplateOutlet]="template"
      [ngTemplateOutletContext]="{
        item: oneItem
      }"
    ></ng-container>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `,
  ],
})
export class ListComponent {
  @Input() template: TemplateRef<any>;

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
}
