import { Column } from "./column.model";

export class Board {
    add(columnName: string) {
        this.columns.splice(this.columns.length-1, 0, new Column(columnName, []) )
    }
    constructor(public name: string, public columns: Column[]) {}
}