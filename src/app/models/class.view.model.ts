import {TeacherViewModel} from "./teacher.view.model";
import {StudentViewModel} from "./student.view.model";

export class ClassViewModel {
  constructor(
    public id?: number,
    public number?: number,
    public letter?: string,
    public classTeacher?: TeacherViewModel,
    public students?: StudentViewModel[]
  ) { }
}
