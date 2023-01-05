import {Checkbox, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";

export default function TodoList({todos, addTodo, handleComplete}) {

  return (
    <ListItem key={todos.id}>
      <ListItemButton role={undefined} onClick={handleComplete(todos.id)} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todos.completed}
            tabIndex={-1}
          />
        </ListItemIcon>
        <ListItemText id={todos.id} primary={todos.task} />
      </ListItemButton>
    </ListItem>
  )
}