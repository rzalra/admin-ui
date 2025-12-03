import React from 'react';

function CheckBox({ id, label, ...rest }) {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        className="h-4 w-4 accent-primary"
        {...rest}
      />

      <label
        htmlFor={id}
        className="text-sm text-gray-600 ml-2"
      >
        {label}
      </label>
    </div>
  );
}

export default CheckBox;
