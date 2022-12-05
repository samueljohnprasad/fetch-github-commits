import React, { useState } from "react";
import { FormTypes } from "./types";

export const Form: React.FC<FormTypes> = ({ handleFormSubmit }) => {
  const [inputState, setInputState] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(event.target.value);
  };

  const onSubmit = (event: React.FormEvent) => {
    handleFormSubmit({ personalToken: inputState });
    setInputState("");

    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={inputState}
          onChange={handleInputChange}
          placeholder="Enter github personal token"
        />
        <button type="submit">next</button>
      </form>
    </div>
  );
};
