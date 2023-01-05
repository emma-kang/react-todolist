import { useEffect, useState } from 'react';
import TodoList from './TodoList';
import {Box, Container, List} from "@mui/material";
import { mockTodos } from "../mock/todos";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // load mock data
    setTodos(mockTodos);
  }, []);

  const addTodo = (newTask) => {
    setTodos([...todos, newTask]);
  }

  const handleComplete = (id) => {
    console.log('handle complete');
  }

  if (todos.length <= 0) return null;

  return (
    <Container>
      <Box>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {todos.map((item, index) => (
            <TodoList key={index} todos={item} addTodo={(newTask) => addTodo(newTask)} handleComplete={(id) => handleComplete(id)}/>
          ))}
        </List>
      </Box>
    </Container>
  )
}