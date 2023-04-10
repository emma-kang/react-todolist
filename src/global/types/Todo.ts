export type Todo = {
  userId: number;
  id: number;
  task: string;
  completed: boolean;
}

export type InputTodo = {
  accountId: number;
  task: string;
  completed: boolean;
}
