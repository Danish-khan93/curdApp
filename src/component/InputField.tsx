import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
type Props={
    name:string,
placeHolder:string,
type:string,
control:any,
rules:any
}
const InputField = ({ name, control, placeHolder, type, rules }:Props) => {
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <>
            <TextField
              className="w-[50%]"
              value={value}
              type={type}
              placeholder={placeHolder}
              onChange={onChange}
              error={!!error}
              helperText={error?.message}
              autoComplete="off"
            />
          </>
        );
      }}
    />
  );
};

export default InputField;
