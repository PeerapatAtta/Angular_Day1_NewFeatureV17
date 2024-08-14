import { Component } from '@angular/core';

@Component({
  selector: 'app-large',
  standalone: true,
  imports: [],
  template: `
    <h2>Large Component</h2>
  `,
})
export class LargeComponent {

}


@Component({
  selector: 'app-deferrable-view',
  standalone: true,
  imports: [LargeComponent],
  template: `
    <h1>Deferrable View</h1>

    <button #trigger>Trigger</button>

    @defer (on interaction(trigger)){
      <app-large/>
    }
    @placeholder (minimum 50ms){
      <div>Loading...</div>
    }@error {
      <div>Error... Loading</div>
    }
  `,
})
export class DeferrableViewComponent {

}
