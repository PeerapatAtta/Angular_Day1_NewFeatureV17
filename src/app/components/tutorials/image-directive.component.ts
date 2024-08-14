import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-directive',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <p>
      image-directive works!
    </p>

    <div>
      <img ngSrc="assets/logo.png" width="400" height="200" />
    </div>
    
  `,
})
export class ImageDirectiveComponent {

}
