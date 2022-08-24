interface ICheckbox {
  name: string;
  label: string;
  checked?: boolean;
  classes?: string;
  gray?: boolean;
  value?: string;
  disabled?: boolean;
  onChange?: (event: any) => void;
}

export const Checkbox = ({
  name,
  label,
  checked = false,
  classes,
  gray = false,
  value,
  disabled = false,
  onChange,
  ...props
}: ICheckbox) => {
  return (
    <label
      className={`label cursor-pointer justify-start ${classes}`}
      {...props}
    >
      <input
        name={name}
        type='checkbox'
        checked={checked}
        value={value}
        disabled={disabled}
        className={`checkbox ${gray && 'border-gray-100'} rounded-none w-4 h-4`}
        onChange={onChange}
      />
      <span className={`label-text ${gray && 'text-gray-100'} pl-3`}>
        {label}
      </span>
    </label>
  );
};
