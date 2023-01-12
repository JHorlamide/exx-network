import { InputHTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  required?: boolean;
  type: string;
  register: UseFormRegister<FieldValues>;
  errors?: any;
  className: string;
  placeholder: string;
  validationSchema?: any;
  containerClassName: string;
}

const Input = ({
  id,
  label,
  required,
  type,
  register,
  errors,
  className,
  placeholder,
  validationSchema,
  containerClassName,
  ...rest
}: InputProps) => {
  return (
    <div className={containerClassName}>
      <label htmlFor={id} className="text-xs font-semibold">
        {label}
      </label>

      <input
        id={id}
        type={type}
        {...register(id, validationSchema)}
        className={className}
        placeholder={placeholder}
        {...rest}
      />

      {errors && errors[id]?.type === "required" && (
        <small className="text-red">{errors[id]?.message}</small>
      )}

      {errors && errors[id]?.type === "minLength" && (
        <small className="text-red">{errors[id]?.message}</small>
      )}
    </div>
  );
};

export default Input;
