
export class ToDo {
    constructor(
        public task: string,
        public statusId: number,
        public priority: 'Low' | 'Medium' | 'High',
        public dueDate: Date,
        public assigneeId: number,
        public notes: string,
    ) { }
}

export class ToDoManagement {
    constructor(
        public id: number,
        public task: string,
        public statusTitle: string,
        public priority: string,
        public dueDateTitle: string,
        public assigneeTitle: string,
    ) { }
}


