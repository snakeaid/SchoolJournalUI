import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Home', icon: 'pi pi-home', routerLink: '/'},
      {label: 'Journals', icon: 'pi pi-book', routerLink: 'journals'},
      {label: 'Schedule', icon: 'pi pi-calendar', routerLink: 'schedule'},
      {label: 'Classes', icon: 'pi pi-users', routerLink: 'classes'},
      {label: 'Teachers', icon: 'pi pi-id-card', routerLink: 'teachers'}
    ];
  }

}
