import { Control } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Controller } from "react-hook-form";
import style from "./inputPhone.module.scss";
import { ErrorMessage } from "../ErrorMessage";

interface InputPhone {
  name: string;
  defaultValue: string;
  control: Control<any>;
}

const InputPhone: React.FC<InputPhone> = ({ name, control, defaultValue }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={{}}
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
      <ErrorMessage field={name} />
    </div>
  );
};

export default InputPhone;
