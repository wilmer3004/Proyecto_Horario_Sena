import { useState } from 'react'


export const InputLabel = ({ 
  name, //Nombre del input
  htmlId, //ID del input
  label, //Label superior al input
  value, //Value del input
  onChange, //Alamacenar el valor tomado por el input en una variable
  inputProps, //No se usa
  col //Cantidad de columnas
}) => {
  const [isInputFocused, setInputFocused] = useState(false);

  const handleInput = (event) => {
    onChange(event.target.value); //Analiza lo que contiene el input y con el OnChange toma el valor para luego almacenarlo
  };

  return (
    <div className={`col-span-${col} relative w-full mt-4`}>
      <label
        htmlFor={htmlId}
        className={`pl-2 pt-2 absolute transition-transform font-light ${
          isInputFocused || value ? '-translate-y-7 text-sm text-gray-300' : '-translate-y-0.2 text-lg text-gray-500'
        }`}
      >
        {label}
      </label>
      <input
        id={htmlId}
        className="w-full p-2 font-normal rounded-md shadow-md outline-none border"
        required
        type="text"
        value={value}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        onInput={handleInput}
        {...inputProps}
      />
    </div>
  );
}
