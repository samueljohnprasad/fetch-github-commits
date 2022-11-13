export type CommitsProps = {
  getData: (owner: string, repo: string) => Promise<any>;
};

export type RepoDetails = { owner: string; repo: string };
export type CommitsObj = {
  id: string;
  authorName: string;
  commitTime: string;
  commitMessage: string;
};
