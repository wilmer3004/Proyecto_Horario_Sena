import { useState } from 'react'


export const InputLabel = ({ 
  htmlId,
  label, 
  value, 
  onChange, 
  inputProps,
  col
}) => {
  const [isInputFocused, setInputFocused] = useState(false);

  const handleInput = (event) => {
    onChange(event.target.value);
  };

  return (
    <li className={`col-span-${col} relative w-full mt-4`}>
      <label
        htmlFor={htmlId}
        className={`pl-2 pt-2 absolute transition-transform font-light ${
          isInputFocused || value ? '-translate-y-7 text-sm text-gray-300' : '-translate-y-0.2 text-base text-gray-500'
        }`}
      >
        {label}
      </label>
      <input
        id={htmlId}
        className="w-full p-2 font-light rounded-sm shadow-md outline-none border"
        type="text"
        value={value}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        onInput={handleInput}
        {...inputProps}
      />
    </li>
  );
}
