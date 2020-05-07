import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tree-classifier-mapper';
  menuOpen: any = true;

  toggleMenu = () => {
    this.menuOpen = !this.menuOpen;
  }



}
