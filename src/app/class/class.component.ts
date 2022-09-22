import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ClassesService} from "../services/classes.service";
import {ClassViewModel} from "../models/class.view.model";

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
  providers: [ClassesService]
})
export class ClassComponent implements OnInit {
  private id: number;
  public class: ClassViewModel;

  constructor(private activateRoute: ActivatedRoute, private service: ClassesService){
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.load();
  }

  private load() {
    this.service.get(this.id).subscribe(data => this.class = <ClassViewModel> data);
  }

}
