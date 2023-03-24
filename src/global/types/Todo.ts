export type Todo = {
  userId: number;
  id: number;
  task: string;
  completed: boolean;
}

export type InputTodo = {
  task: string;
  completed: boolean;
}
