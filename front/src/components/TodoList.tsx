import { useEffect, useState } from 'react';
import TodoListItem from './TodoListItem';
import { Box, Button, Grid, List, Stack, TextField, Typography } from '@mui/material';
import { addNewTask, mockTodos } from 'mock/todos';
import { InputTodo, Todo } from "../global/Todo";

/*
 * Todo:
 * 1. make reusable component
 * 2. create test code (unit, (option)e2e)
 * 3. back-end with Node.js
 * 4. modified front code to API
 */

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  useEffect(() => {
    // load mock data - wil be replaced to api call
    setTodos(mockTodos);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === null) return;
    setNewTask(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") addTodo();
  };

  const addTodo = () => {
    if (newTask.trim() !== '') {
      const newData:InputTodo = {
        task: newTask,
        completed: false,
      };
      // following: call api to store new task (will be replaced)
      const res = addNewTask(newData);
      setTodos(res);
    }
    setNewTask(''); // initialize
  };

  return (
    <Stack spacing={2}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ bgcolor: '#fefae0', borderRadius: '10px', minHeight: 70, maxHeight: 412, overflowY: 'auto' }}>
            {todos.length > 0 ? (
              <List sx={{ width: '100%' }}>
                {todos.map((item: Todo) => (
                  <TodoListItem key={item.id} todos={item} />
                ))}
              </List>
            ) : (
              <Typography p={3} color="#bc6c25">
                No Tasks
              </Typography>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} sm={10}>
          <TextField
            id="task"
            variant="standard"
            label="New Task"
            onChange={handleChange}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(e)}
            sx={{ width: '100%' }}
            value={newTask}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button variant="contained" onClick={addTodo} sx={{ bgcolor: '#283618', width: '100%' }}>
            ADD
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
}
