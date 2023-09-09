"use client";

import { Controller, useFormContext } from "react-hook-form";
import { RadioButton } from "./RadioButton";

export const RadioGroup = ({ options, name, rest, label }) => {
  const { control } = useFormContext();
  return (
    <>
      <label className="label-1">{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className="flex gap-6 mt-3 mb-8">
            {options?.map((opt) => {
              return (
                <div className="flex flex-row gap-2" key={opt.id}>
                  <input
                    type="radio"
                    value={opt.id}
                    checked={field.value === opt.id}
                    onChange={field.onChange}
                    className="w-4"
                  />
                  <label
                    htmlFor={opt.id}
                    className={`typo-2 ${rest.disabled && "opacity-10"}`}
                  >
                    {opt.label}
                  </label>
                </div>
                // <RadioButton
                //   key={opt.id}
                //   label={opt.label}
                //   value={opt.id}
                //   checked={opt.id === field.value}
                //   rest={rest}
                //   name={name}
                //   onChange={field.onChange}
                // />
              );
            })}
          </div>
        )}
      />
    </>
  );
};
