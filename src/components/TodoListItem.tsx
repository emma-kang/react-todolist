import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { InputTodo, Todo } from "../global/types/Todo";
import useTodoStore from "../zustand/todoStore";

export type TodoListItemProps = {
  todos: Todo;
}
export default function TodoListItem({todos}: TodoListItemProps) {
  const [checked, setChecked] = useState<boolean>(todos.completed);
  const { deleteTodo, accountId, updateTodo } = useTodoStore();

  const handleClick = () => {
    setChecked(!checked);
    const data:InputTodo = {
      accountId,
      task: todos.task,
      completed: !checked,
    }
    updateTodo(Number(todos.id), data);
  }

  const handleDelete = () => {
    deleteTodo(Number(todos.id));
  }

  return (
    <>
      <ListItem key={todos.id} sx={{width: '100%'}}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
                    <DeleteIcon/>
                  </IconButton>
                }
      >
        <ListItemButton role={undefined} dense onClick={handleClick}>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={checked}
              tabIndex={-1}
              sx={{
                color: '#bc6c25',
                '&.Mui-checked': {
                  color: '#bc6c25'
                }
              }}
            />
          </ListItemIcon>
          <ListItemText id={todos.id.toString()} primary={todos.task}
                        sx={{textDecorationLine: checked ? 'line-through' : 'none'}}/>
        </ListItemButton>
      </ListItem>
    </>
  )
}