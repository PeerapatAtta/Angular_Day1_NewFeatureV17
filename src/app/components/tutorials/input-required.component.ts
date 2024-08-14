import { Component, input, model, output } from '@angular/core';

//Child Class
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h2>Input Require</h2>
      <h3>Child Component</h3>
      <p>{{name()}}</p>
      <button (click)="nameChanged('angular 17')">Change Name</button>
    </div>
  `,
})

export class ChildComponent {
  name = input.required<string>()
  nameChange = output<string>()
  myName = model<string>()

  nameChanged(newName: string) {
    this.nameChange.emit(newName)
    this.myName.set(newName)
  }
}

//Mother Class
@Component({
  selector: 'app-input-required',
  standalone: true,
  imports: [ChildComponent],
  template: `
      <app-child 
        [name]="name" 
        [(myName)]="myName" 
        (nameChange)="nameChange($event)"
        (myName)="myNameChange($event)"/>
        model: {{myName()}} <br>
        <button (click)="myName.set('angular 18')">Change Model Parent</button>

  `,
})
export class InputRequiredComponent {
  name = 'Angular'
  myName = model<string>('parent')

  nameChange(evt: string) {
    console.log('name changed', evt)
  }

  myNameChange(evt: Event) {
    console.log('myName changed', evt)
  }

 
}
