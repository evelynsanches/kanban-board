import { Task } from "./task.model";

export class Column {
    addTask(taskDescription: string) {
        this.tasks.push(new Task(taskDescription) )
    }
    constructor(public name: string, public tasks: Task[], public empty: boolean = false) {}
}