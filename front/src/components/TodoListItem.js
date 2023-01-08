import {Checkbox, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {useState} from "react";

export default function TodoListItem({todos}) {
  const [checked, setChecked] = useState(todos.completed);

  const handleClick = () => {
    setChecked(!checked);
  }
  const handleChange = (event) => {
    setChecked(event.target.checked);
    // following: call api to store each todo's current status
  }

  return (
    <ListItem key={todos.id} sx={{width: '100%'}}>
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
        <ListItemText id={todos.id} primary={todos.task} sx={{ textDecorationLine: checked ? 'line-through' : 'none'}}/>
      </ListItemButton>
    </ListItem>
  )
}