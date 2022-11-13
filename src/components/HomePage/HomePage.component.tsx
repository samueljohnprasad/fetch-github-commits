import { useEffect, useState } from "react";
import Form from "../Form";
import { HandleFormSubmit } from "../../types";

import { useOctokit } from "../hooks/useOctokit";
import Commits from "../Commits";
import { PERSONAL_TOKEN_KEY } from "../constants";
import {
  sessionStorageGetItem,
  sessionStorageSetItem,
} from "../../utils/sessionStorage";

export const HomePage: React.FC = () => {
  const [personalToken, setPersonalToken] = useState("");
  const { initOctokit, getData, isLoading } = useOctokit();
  const handleFormSubmit: HandleFormSubmit = ({ personalToken }) => {
    setPersonalToken(personalToken);
  };

  useEffect(() => {
    const token = sessionStorageGetItem(PERSONAL_TOKEN_KEY);
    if (token) {
      setPersonalToken(token);
    }
  }, []);

  useEffect(() => {
    if (personalToken) {
      sessionStorageSetItem(PERSONAL_TOKEN_KEY, personalToken);
      initOctokit(personalToken);
    }
  }, [initOctokit, personalToken]);

  if (!personalToken) {
    return <Form handleFormSubmit={handleFormSubmit} />;
  }

  return (
    <>
      {isLoading && <div>loading.....</div>}
      <Commits getData={getData} />
    </>
  );
};
