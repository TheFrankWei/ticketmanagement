import { ErrorMessage } from "@hookform/error-message";
import { forwardRef } from "react";

interface SelectProps
  extends React.PropsWithRef<JSX.IntrinsicElements["select"]> {
  id: string;
  label?: string;
  options: { label: string; value: string }[];
  error?: any;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ id, label = id, options, error, ...rest }, ref) => (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        ref={ref}
        {...rest}
        className="text-black border border-black"
      >
        {options.map((option) => (
          <option
            className="text-black"
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <ErrorMessage
          errors={error}
          name="email"
          render={({ message }) => <p className="error">{message}</p>}
        />
      )}
    </div>
  )
);

Select.displayName = "Select";

export default Select;
