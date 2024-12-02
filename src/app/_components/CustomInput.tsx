"use client";
import { cn } from "@/lib/utils";
import React, { InputHTMLAttributes } from "react";
import {
  FieldErrors,
  UseFormRegister,
  UseFormClearErrors,
  UseFormTrigger,
} from "react-hook-form";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegister<any>;
  placeholder?: string;
  errors?: FieldErrors<any>;
  id: string;
  style?: React.CSSProperties;
  hidden?: boolean;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  isNumber?: boolean;
  clearErrors?: UseFormClearErrors<any>;
}

const CustomInput: React.FC<CustomInputProps> = ({
  register,
  id,
  placeholder,
  errors,
  required,
  style,
  hidden,
  onChange,
  maxLength,
  isNumber,
  clearErrors,
  ...rest
}) => {
  const hasError = errors && errors[id] && errors[id]?.message;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;
    if (clearErrors) clearErrors(id);

    if (isNumber) {
      const numericValue = value.replace(/[^0-9۰-۹]/g, "");
      if (maxLength && numericValue.length > maxLength) {
        value = numericValue.slice(0, maxLength);
      } else {
        value = numericValue;
      }
      event.target.value = value;
    }

    if (onChange) onChange(event);
  };

  return (
    <div className="relative w-full">
      <input
        autoComplete="off"
        {...register?.(id)}
        onChange={handleChange}
        placeholder={placeholder}
        type="text"
        className={cn(
          hidden ? "hidden" : "",
          hasError && "!border-red-500",
          "focus:outline-none w-full border border-gray-100 rounded-md p-4 text-customGray font-normal placeholder-customGray "
        )}
        maxLength={maxLength}
        style={{ ...style }}
        {...rest}
      />
      {hasError && (
        <div className="absolute text-[11px] text-right w-full flex gap-1 items-center text-red-500">
          <p className="mt-1">*</p>
          <p>{errors[id]?.message as string}</p>
        </div>
      )}
    </div>
  );
};

export default CustomInput;
