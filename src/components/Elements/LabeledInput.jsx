import React from "react";

function LabeledInput({ label, id, type = "text", ...rest }) {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm text-gray-600 mb-2"
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        className="text-sm rounded-md w-full bg-special-mainBg border border-gray-200 text-gray-700 py-2 px-3 focus:border-gray-400 focus:outline-none focus:ring-0"
        {...rest}
      />
    </div>
  );
}

export default LabeledInput;
