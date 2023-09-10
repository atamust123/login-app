import { Controller, useFormContext } from "react-hook-form";

export default function Input({ label, disabled, inputProps, name }) {
  const { control } = useFormContext();
  return (
    <>
      <label className={`label-1 mb-3 ${inputProps?.disabled && "opacity-60"}`}>
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            {...inputProps}
            {...field}
            className={` input-1 mt-3 mb-6 ${inputProps?.className}`}
            disabled={disabled}
          />
        )}
      />
    </>
  );
}
