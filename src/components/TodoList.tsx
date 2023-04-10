import { useEffect, useState } from 'react';
import TodoListItem from './TodoListItem';
import { Box, Grid, List, Stack, Typography } from '@mui/material';
import { InputTodo, Todo } from "../global/types/Todo";
import CustomTextField from "./common/CustomTextField";
import CustomButton from "./common/CustomButton";
import useTodoStore from "../zustand/todoStore";

export default function TodoList() {
  const [newTask, setNewTask] = useState<string>('');
  const { getTodosByUser, todos, accountId, addTodo, response } = useTodoStore();

  useEffect(() => {
    if (response.status === null || response.status === 200) getTodosByUser(accountId);
  }, [getTodosByUser, accountId, response]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === null) return;
    setNewTask(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") addNewTask();
  };

  const addNewTask = () => {
    if (newTask.trim() !== '') {
      const newData:InputTodo = {
        accountId,
        task: newTask,
        completed: false,
      };
      addTodo(newData);
    }
    setNewTask(''); // initialize
  };

  return (
    <Stack spacing={2}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ bgcolor: '#fefae0', borderRadius: '10px', minHeight: 70, maxHeight: 412, overflowY: 'auto' }}>
            {todos && todos?.length > 0 ? (
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
          <CustomTextField id="task" variant="standard" label="New Task"
                           handleChange={handleChange} handleKeyDown={handleKeyDown} sx={{width: '100%'}} value={newTask} />
        </Grid>
        <Grid item xs={12} sm={2}>
          <CustomButton variant="contained" handleClick={addNewTask} text="ADD"
                        sx={{ bgcolor: '#283618', width: '100%', '&:hover': { bgcolor: '#3c5224'} }}/>
        </Grid>
      </Grid>
    </Stack>
  );
}
