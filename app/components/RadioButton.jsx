export const RadioButton = ({ name, value, rest, label }) => {
  return (
    <div className="flex flex-row gap-2">
      <input
        type="radio"
        id={value}
        name="name"
        value={value}
        className="w-4"
        {...rest}
      />
      <label
        className={`typo-2 ${rest.disabled && "opacity-10"}`}
        htmlFor={value}
      >
        {label}
      </label>
    </div>
  );
};
