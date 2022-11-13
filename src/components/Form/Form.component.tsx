import React, { useState } from "react";
import { FormTypes } from "./types";

export const Form: React.FC<FormTypes> = ({ handleFormSubmit }) => {
  const [inputState, setInputState] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(event.target.value);
  };

  const onSubmit = (event: React.FormEvent) => {
    if (inputState) {
      setInputState("");
      handleFormSubmit({ personalToken: inputState });
    }
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Enter personal token key</label>
        <input value={inputState} onChange={handleInputChange} />
        <button type="submit">enter</button>
      </form>
    </div>
  );
};
