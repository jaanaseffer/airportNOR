import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Airports', icon: 'pi pi-fw pi-home' },
      { label: 'Map', icon: 'pi pi-fw pi-calendar' },
    ];
  }
}
