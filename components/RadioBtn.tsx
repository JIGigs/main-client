interface IRadioBtn {
  name: string;
  label: string;
  checked?: boolean;
  classes?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (event: any) => void;
}

export const RadioBtn = ({
  name,
  label,
  checked = false,
  classes,
  value,
  disabled = false,
  ...props
}: IRadioBtn) => {
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
        className='checkbox border-gray-100 rounded-none w-4 h-4'
      />
      <span className='label-text text-gray-100 pl-3'>{label}</span>
    </label>
  );
};
