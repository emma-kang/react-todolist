import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { Todo } from "../global/Todo";
import {completeTask, deleteTask} from "../mock/todos";

type TodoListItemProps = {
  todos: Todo;
}
export default function TodoListItem({todos}: TodoListItemProps) {
  const [checked, setChecked] = useState<boolean>(todos.completed);

  const handleClick = () => {
    setChecked(!checked);
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    // following: call api to store each todo's current status
    completeTask(Number(todos.id));
  }

  const handleDelete = () => {
    // following: call api to delete the todo
    deleteTask(Number(todos.id));
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
              onChange={handleChange}
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