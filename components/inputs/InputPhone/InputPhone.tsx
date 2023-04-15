import { Control } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Controller } from "react-hook-form";
import style from "./inputPhone.module.scss";

interface InputPhone {
  name: string;
  defaultValue: string;
  control: Control;
}

const InputPhone: React.FC<InputPhone> = ({ name, control, defaultValue }) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={{ required: false }}
      render={({ field: { onChange, onBlur } }) => (
        <PhoneInput
          placeholder="Enter phone number"
          value={defaultValue}
          onBlur={onBlur}
          onChange={onChange}
          className={style.customClass}
        />
      )}
    />
  );
};

export default InputPhone;
