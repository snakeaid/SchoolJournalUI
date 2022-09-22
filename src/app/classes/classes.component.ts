import { Component, OnInit } from '@angular/core';
import {ClassViewModel} from "../models/class.view.model";
import {ClassesService} from "../services/classes.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css'],
  providers: [ClassesService]
})
export class ClassesComponent implements OnInit {
  classes: ClassViewModel[];

  constructor(private service: ClassesService, private router: Router) { }

  ngOnInit(): void {
    this.load();
  }

  private load() {
    this.service.getAll().subscribe(data => this.classes = <ClassViewModel[]> data);
  }
}
