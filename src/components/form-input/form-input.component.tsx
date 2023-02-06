import { FC, InputHTMLAttributes } from "react";
import { FormInputLabel, Input, Group } from "./form-input.styles";

type FormInputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  const isShrink = Boolean(
    otherProps.value &&
      typeof otherProps.value === "string" &&
      otherProps.value.length
  );

  return (
    <Group>
      <Input {...otherProps} />
      {label && <FormInputLabel shrink={isShrink}>{label}</FormInputLabel>}
    </Group>
  );
};

export default FormInput;
