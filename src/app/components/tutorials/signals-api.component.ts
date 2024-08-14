import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals-api',
  standalone: true,
  imports: [],
  template: `
    <div>
      signals-api works! <br>
      <button (click)="increase()">Increase</button>
      <button (click)="decrease()">decrease</button><br>
      count: {{count()}} <br>
      result: {{result()}}
    </div>
  `,
  styles: ``
})
export class SignalsApiComponent {

  count = signal<number>(0)
  result = computed(()=>this.count()*2)

  constructor(){
    effect(()=>{
      console.log('count', this.count())
    })    
    effect(()=>{
      console.log('resut', this.result())
    })
  }

  increase(){
    this.count.set(this.count()+1)
  }

  decrease(){
    this.count.set(this.count()-1)
  }

}
