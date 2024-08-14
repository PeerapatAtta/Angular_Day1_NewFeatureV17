import { NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [NgIf],
  template: `
    <h1>
      control-flow works!
    </h1>

    <h2>If-Else:</h2>
    @if (qty()>20) {
      div: {{qty()}} > 20
    } @else {
      div: {{qty()}} <= 20
    }

    <h2>For-Empty:</h2>
    @for (product of products(); track $index) {
      <div>{{$index+1}}. {{product}}</div>
    }@empty {
      <div>No product</div>
    }

    <h2>Switch Case:</h2>
    @switch (gender()) {
      @case (1) {<div>Male</div>}
      @case (2) {<div>Female</div>}
      @default {<div>Unknown Gender</div>}
    }
    
  `,
  styles: ``
})
export class ControlFlowComponent {
  qty = signal<number>(10)
  products = signal<string[]>(['A','B','C'])
  gender = signal(1)
}
