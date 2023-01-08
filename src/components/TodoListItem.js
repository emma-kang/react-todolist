import {Checkbox, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {useState} from "react";

export default function TodoListItem({todos}) {
  const [checked, setChecked] = useState(todos.completed);
  const handleChange = (event) => {
    setChecked(event.target.checked);
    // following: call api to store each todo current status
  }

  return (
    <ListItem key={todos.id} sx={{width: '100%'}}>
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked}
            onChange={handleChange}
            tabIndex={-1}
          />
        </ListItemIcon>
        <ListItemText id={todos.id} primary={todos.task}/>
      </ListItemButton>
    </ListItem>
  )
}