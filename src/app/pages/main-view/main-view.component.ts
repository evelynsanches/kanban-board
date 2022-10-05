import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board-model';
import { Column } from 'src/app/models/column.model';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  constructor() {}

  board: Board = new Board('Test Board', [
    new Column('To do', [new Task('Get to work'),
      
      new Task('Pick up groceries'),
      new Task ('Go home'),
      new Task ('Fall asleep'),
    ]),
    new Column('In Progress', [new Task ('Brush teeth'), new Task ('Check e-mail')]),
    new Column('Done', [new Task ('Get up'), new Task ('Take a shower'), new Task ('Walk dog')]),
    new Column('', [], true)
  ]);
  
  newColumn(newColumnName: HTMLInputElement) {
   this.board.add(newColumnName.value)
   newColumnName.value = "";
  }

  newTask(newTask: HTMLInputElement, column: Column) {
    column.addTask(newTask.value)
    newTask.value = "";
   }

  ngOnInit(): void {}

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
