import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../Task';
import { TASKS } from '../../mock--tasks';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../../services/task.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule,TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
 tasks:Task[] = TASKS ;
 constructor(private taskService:TaskService)
 {

 }
 ngOnInit(): void {
 this.taskService.getTasks().subscribe((tasks)=>(this.
tasks=tasks)
 );
 }
}
