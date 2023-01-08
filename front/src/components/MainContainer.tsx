import { Typography } from "@mui/material";
import TodoList  from "./TodoList";

export default function MainContainer() {
  return (
    <>
      <Typography variant="h3" fontWeight={500} mt={4} mb={4}>To Do List</Typography>
      <TodoList />
  </>
)
}