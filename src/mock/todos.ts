import { InputTodo, Todo } from "../global/types/Todo";

export let mockTodos: Todo[] = [
  {
    "userId": 1,
    "id": 1,
    "task": "read books",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "task": "study programming",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "task": "playing game",
    "completed": true
  },
  {
    "userId": 1,
    "id": 4,
    "task": "take vitamin",
    "completed": false
  }
]

// temp functions
export const addNewTask = (newData:InputTodo):Todo[] => {
  const data = getMockTodos();
  const userId = data[0].userId;
  const lastId = data[data.length-1].id;

  data.push({
    userId: userId,
    id: lastId+1,
    task: newData.task,
    completed: newData.completed,
  });

  setMockTodos(data);
  return getMockTodos();
}

export const completeTask = (id: number) => {
  const data = getMockTodos();
  data.map((todo:Todo) => {
    if (todo.id === id) {
      todo.completed = !todo['completed'];
    }
    return todo;
  });
}

// todo: function check - not work now
export const deleteTask = (id: number) => {
  const filteredData:Todo[] = getMockTodos().filter((todo: Todo) => todo.id !== id)
  setMockTodos(filteredData);
}

const getMockTodos = (): Todo[] => {
  return mockTodos;
}

const setMockTodos = (req:Todo[]) => {
  mockTodos = req;
}