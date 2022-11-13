import { Octokit } from "@octokit/core";

import { useCallback, useState } from "react";

export const useOctokit = () => {
  const [octokit, setOctokit] = useState<Octokit>();
  const [isLoading, setIsLoading] = useState(false);

  const initOctokit = useCallback((token: string) => {
    const octokit = new Octokit({
      auth: token,
    });
    setOctokit(octokit);
  }, []);

  const getData = useCallback(
    async (owner: string, repo: string) => {
      setIsLoading(true);

      const response = await octokit?.request(
        "GET /repos/{owner}/{repo}/commits",
        {
          owner,
          repo,
        }
      );

      setIsLoading(false);
      return response?.data;
    },
    [octokit]
  );

  return {
    initOctokit,
    getData,
    isLoading,
  };
};
