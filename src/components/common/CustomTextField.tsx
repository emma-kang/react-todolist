import { TextField } from "@mui/material";

export type CustomTextFieldProps = {
  id: string;
  variant?: "standard" | "filled" | "outlined" | undefined;
  label: string;
  handleChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  sx?: object;
  value: string;
}
export default function CustomTextField(props: CustomTextFieldProps) {
  return (
    <TextField
      id={props.id}
      variant={props.variant}
      label={props.label}
      onChange={props.handleChange}
      onKeyDown={props.handleKeyDown}
      sx={props.sx}
      value={props.value}
      data-testid="custom-text-field"
    />
  );
}