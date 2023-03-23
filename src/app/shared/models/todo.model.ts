export interface TodoModel {
  id: number,
  title: string;
  status: TodoStatus;
  completed: boolean;
}

// const enum Statuses { // omitted
//   Completed = 'completed',
//   InProgress = 'inProgress',
//   Todo = 'todo'
// }

type TodoStatus = 'completed' | 'inProgress' | 'todo';
