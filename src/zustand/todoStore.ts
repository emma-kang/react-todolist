import { Todo } from "../global/types/Todo";
import { create } from "zustand";
import axios from "../utils/axios";

interface ITodoState {
  isLoading: boolean;
  todos: Todo[] | null;
  error: string | null;
  getTodos: () => void;
  getTodosByUser: (userId: number) => void;
  getTodoById: (todoId: number) => void;
  updateTodo: (todoId: number) => void;
  deleteTodo: (todoId: number) => void;
}

// needed error handling
const useTodoStore = create<ITodoState>((set, get, api) => ({
  isLoading: false,
  todos: null,
  error: null,
  getTodos: async () => {
    set({ isLoading: true });
    const response = await axios.get('/v1/todos');
    const { data } = response;
    set({ isLoading: false, todos: data });
  },
  getTodosByUser: async (userId) => {
    set({ isLoading: true });
    const response = await axios.get(`/v1/users/${userId}/todos`);
    const { data } = response;
    set({ isLoading: false, todos: data });
  },
  getTodoById: async (todoId) => {
    set({ isLoading: true });
    const response = await axios.get(`/v1/todos/${todoId}`);
    const { data } = response;
    set({ isLoading: false, todos: data });
  },
  updateTodo: async (todoId) => {
    set({ isLoading: true });
    const response = await axios.put(`/v1/todos/${todoId}`);
    const { data } = response;
    set({ isLoading: false, todos: data });
  },
  deleteTodo: async (todoId: number) => {
    set({ isLoading: true });
    const response = await axios.delete(`/v1/todos/${todoId}`);
    const { data } = response;
    set({ isLoading: false, todos: data });
  }
}));

export default useTodoStore;