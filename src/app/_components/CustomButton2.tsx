"use client";
import { cn } from "@/lib/utils";
import React, { MouseEventHandler } from "react";
import CustomLoadingLogin from "./CustomLoadingLogin";
interface Props {
  type?: "submit" | "button";
  title: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  color?: string;
  largerButton?: boolean;
  isLoading?: boolean;
  title2?: string;
}

const CustomButton2: React.FC<Props> = ({
  title,
  onClick,
  largerButton,
  disabled = false,
  type = "button",
  color = "bg-customBlue",
  isLoading = false,
  title2,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={cn(
        title2
          ? "flex justify-between py-4 bg-stone-950 rounded-md text-white px-2 w-full items-center h-full"
          : "flex justify-center py-4 bg-stone-950 rounded-md text-white px-2 w-full items-center h-full",
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
        color,
        isLoading && "!bg-gray-400 cursor-not-allowed",
        largerButton ? "py-7" : ""
      )}
    >
      <div
        className={cn(
          title2
            ? "flex justify-between w-full"
            : "flex justify-center items-center gap-2"
        )}
      >
        <span>{title}</span>
        {title2 && <span>{title2}</span>}
        {isLoading && <CustomLoadingLogin color="#FFF" />}
      </div>
    </button>
  );
};

export default CustomButton2;
