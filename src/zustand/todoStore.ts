import { Todo } from "../global/types/Todo";
import { create } from "zustand";
import axios from "../utils/axios";
import { IResponse } from "../global/interfaces/IResponse";

interface ITodoState {
  accountId: number;
  isLoading: boolean;
  todos: Todo[] | null;
  response: IResponse,
  getTodos: () => void;
  getTodosByUser: (userId: number) => void;
  getTodoById: (todoId: number) => void;
  addTodo: (todoData: object) => void;
  updateTodo: (todoId: number, todoData: object) => void;
  deleteTodo: (todoId: number) => void;
}

const useTodoStore = create<ITodoState>((set, get, api) => ({
  accountId: 1,
  isLoading: false,
  todos: null,
  response: { status: null, message: null },
  error: null,
  getTodos: async () => {
    set({ isLoading: true });
    const response = await axios.get('/v1/todos');
    const { data } = response;
    set({ isLoading: false, todos: data });
  },
  getTodosByUser: async (accountId) => {
    set({ isLoading: true });
    const response = await axios.get(`/v1/todos`, { params: { accountId }} );
    const { data } = response;
    set({ isLoading: false, todos: data });
  },
  getTodoById: async (todoId) => {
    set({ isLoading: true });
    const response = await axios.get(`/v1/todos/${todoId}`);
    const { data } = response;
    set({ isLoading: false, todos: data });
  },
  addTodo: async (todoData) => {
    set({ isLoading: true });
    const response = await axios.post(`/v1/todos`, todoData);
    const { status, data } = response;
    set({ isLoading: false, response: { status, message: data } });
  },
  updateTodo: async (todoId, todoData) => {
    set({ isLoading: true });
    const response = await axios.put(`/v1/todos/${todoId}`, todoData);
    set({ isLoading: false });
  },
  deleteTodo: async (todoId: number) => {
    set({ isLoading: true });
    const response = await axios.delete(`/v1/todos/${todoId}`);
    const { status, data } = response;
    set({ isLoading: false, response: { status, message: data } });
  }
}));

export default useTodoStore;