import React, { useState } from "react";
import { UserFormProps } from "./types";

export const UserForm: React.FC<UserFormProps> = ({ submitHandler }) => {
  const [owner, setOwner] = useState("");
  const [repo, setRepo] = useState("");

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (owner && repo) submitHandler({ owner, repo });
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
        placeholder="Enter github username"
      />

      <input
        value={repo}
        onChange={(e) => setRepo(e.target.value)}
        placeholder="Enter repository name"
      />
      <button type="submit">fetch</button>
    </form>
  );
};
