import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface AuthFormFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  error?: string;
  className?: string;
  required?: boolean;
}

export const AuthFormField = forwardRef<HTMLInputElement, AuthFormFieldProps>(
  (
    {
      label,
      type = "text",
      placeholder,
      error,
      className,
      required = false,
      ...inputProps
    },
    ref
  ) => {
    return (
      <div className={cn("space-y-2", className)}>
        <Label
          htmlFor={inputProps.name}
          className="text-sm font-medium text-gray-700"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Label>
        <Input
          id={inputProps.name}
          type={type}
          placeholder={placeholder}
          className={cn(
            "w-full",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500"
          )}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${inputProps.name}-error` : undefined}
          ref={ref}
          {...inputProps}
        />
        {error && (
          <p
            id={`${inputProps.name}-error`}
            className="text-sm text-red-500 mt-1"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

AuthFormField.displayName = "AuthFormField";
