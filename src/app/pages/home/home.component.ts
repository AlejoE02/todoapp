import {Component, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: 'Make a project',
      completed: true
    },
    {
      id: Date.now(),
      title: 'Make Components',
      completed: false
    }
  ]);

  changeHandler(event: Event) {

    const input: HTMLInputElement = event.target as HTMLInputElement;
    const newTask: string = input.value;
    this.addTask(newTask);
  }

  addTask(title: string){
    const newTask = {
      id: Date.now(),
      title,
      completed: false
    }
    this.tasks.update((tasks) => [...tasks, newTask]);
  }

  deleteTask(index: number) {
    this.tasks.update((tasks) => tasks.filter((task, position) => position !== index))
  }
  updateTask(index: number){
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if(position === index){
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task;
      })
    })
  }
}
