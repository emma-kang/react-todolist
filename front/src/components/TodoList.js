import { useEffect, useState } from 'react';
import TodoListItem from './TodoListItem';
import {Box, Button, FormControl, Grid, List, Stack, TextField, Typography} from "@mui/material";
import { mockTodos } from "../mock/todos";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // load mock data
    setTodos(mockTodos);
  }, []);

  const addTodo = (newTask) => {
    setTodos([...todos, newTask]);
    // following: call api to store new task
  }

  return (
    <Stack spacing={2}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{bgcolor: '#fefae0', borderRadius: '10px', minHeight: 70, maxHeight: 412, overflowY: 'auto'}}>
            { todos.length > 0 ? (
              <List sx={{ width: '100%', maxWidth: 360}}>
                {todos.map((item, index) => (
                  <TodoListItem key={index} todos={item}/>
                ))}
              </List>
            ) : <Typography p={3} color="#bc6c25">No Tasks</Typography>}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <Grid container item spacing={3} xs={12}>
              <Grid item xs={8}>
                <TextField id="task" variant="standard" label="New Task"/>
              </Grid>
              <Grid item xs={4}>
                <Button variant="contained" onClick={addTodo} sx={{bgcolor: '#283618'}}>ADD</Button>
              </Grid>
            </Grid>
          </FormControl>
        </Grid>
      </Grid>
    </Stack>
  )
}