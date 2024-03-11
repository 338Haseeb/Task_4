import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from '../mock--tasks';
import { Observable,of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  getTasks() :Observable< Task[]>
  {

    const tasks = of(TASKS);
    return tasks ;
  }
}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { HttpHeaders } from '@angular/common/http';
// // import { HttpClientModule } from '@angular/common/http';
// import { Task } from '../Task';
// import { TASKS } from '../mock--tasks';
// import { Observable,of } from 'rxjs';
// @Injectable({
//   providedIn: 'root'
// })
// export class TaskService {
//   private apiUrl = 'http://localhost:8000/tasks'
//   constructor(private http:HttpClient) { }
//   getTasks() :Observable< Task[]>
//   {
//    return this.http.get<Task[]>(this.apiUrl)
//   }
// }
