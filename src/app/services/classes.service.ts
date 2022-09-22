import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ClassCreateModel} from "../models/class.create.model";
import {ClassUpdateModel} from "../models/class.update.model";

@Injectable()
export class ClassesService {

  private url = "https://localhost:7202/api/classes";

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get(this.url);
  }

  get(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  create(schoolClass: ClassCreateModel) {
    return this.http.post(this.url, schoolClass);
  }

  update(schoolClass: ClassUpdateModel) {

    return this.http.put(this.url, schoolClass);
  }

  delete(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
