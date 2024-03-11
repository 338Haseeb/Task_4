import { Component , OnInit , Input} from '@angular/core';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Task } from '../../Task';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule,HttpClientModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent  implements OnInit{
  faTimes = faTimes;
  @Input() task ?: Task;
  constructor()
  {

  }
  ngOnInit(): void {
    
  }

}