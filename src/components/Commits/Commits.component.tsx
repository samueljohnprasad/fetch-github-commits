import { useCallback, useEffect, useState } from "react";
import { formatCommits } from "../../utils/helpers";
import CommitsList from "../CommitsList";
import { useTimer } from "../hooks/useTimer";
import { Refresher } from "../Refesher/Refresher.component";
import UserForm from "../UserForm";
import { CommitsObj, CommitsProps, RepoDetails } from "./types";
import { toast } from "react-toastify";

export const Commits: React.FC<CommitsProps> = ({ getData }) => {
  const [refresh, setRefresh] = useState(false);
  const [repoDetails, setRepoDetails] = useState<RepoDetails>();
  const [commits, setCommits] = useState<Array<CommitsObj>>([]);

  const fetchCommit = useCallback(async () => {
    if (repoDetails) {
      const { owner, repo } = repoDetails;
      const commitsData = await getData(owner, repo);
      if (commitsData) {
        setCommits(formatCommits(commitsData));
        setRefresh(true);
      }
    }
  }, [getData, repoDetails]);

  const { seconds, resetTimer } = useTimer({
    refresh,
    handleRefresh: fetchCommit,
  });

  const getRepoDetails = (details: RepoDetails) => {
    if (!details.owner) {
      toast.error("Enter repo owner username");
      return;
    }

    if (!details.repo) {
      toast.error("Enter valid repo name");
      return;
    }

    setRepoDetails(details);
    setRefresh(true);

    resetTimer();
  };

  useEffect(() => {
    fetchCommit();
  }, [fetchCommit]);
  return (
    <>
      {repoDetails && (
        <Refresher
          handleClick={fetchCommit}
          seconds={seconds}
          resetTimer={resetTimer}
        />
      )}
      <UserForm submitHandler={getRepoDetails} />
      <CommitsList commits={commits} />
    </>
  );
};
