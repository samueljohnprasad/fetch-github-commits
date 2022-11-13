import { Octokit } from "@octokit/core";
import { toast } from "react-toastify";
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
      try {
        const response = await octokit?.request(
          "GET /repos/{owner}/{repo}/commits",
          {
            owner,
            repo,
          }
        );

        return response?.data;
      } catch (e: any) {
        toast.error("something went while fetching data");
      } finally {
        setIsLoading(false);
      }
    },
    [octokit]
  );

  return {
    initOctokit,
    getData,
    isLoading,
  };
};
