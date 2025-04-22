import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>SCSS Demo with {{ name }}</h1>
      <div>
        <button class="primary-button">Primary Button</button>
        <button class="secondary-button">Secondary Button</button>
      </div>
    </div>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);