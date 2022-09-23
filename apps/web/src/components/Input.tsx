import React, { KeyboardEvent } from "react";

export default function Input({
  onEnter,
  ...props
}: React.HTMLProps<HTMLInputElement> & { onEnter?: () => void }): JSX.Element {
  const onKeyDownEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onEnter) {
      e.preventDefault();
      onEnter();
    }
  };

  return (
    <input
      className="block w-full rounded-lg border border-gray-300 bg-gray-50 bg-gray-800 p-2.5 text-sm text-white !outline-none focus:border-teal-500 focus:ring-teal-500"
      onKeyDown={(e) => onKeyDownEnter(e)}
      {...props}
    />
  );
}
