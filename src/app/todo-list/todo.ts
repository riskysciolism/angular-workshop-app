export default class Todo {
    id: number;
    title: string;
    complete: boolean;

    constructor(id: number, title: string, complete: boolean) {
        this.id = id,
        this.title = title;
        this.complete = complete;
    }
}
