import { Button } from "@mui/material";

type CustomButtonProps = {
  variant: "text" | "outlined" | "contained" | undefined;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  sx?: object;
  text: string;
}
export default function CustomButton(props: CustomButtonProps) {
  return (
    <Button variant={props.variant} onClick={props.handleClick} sx={props.sx}>
      {props.text}
    </Button>
  )
}