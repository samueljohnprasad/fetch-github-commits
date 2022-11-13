import { timeSince } from "../../utils/helpers";
import { CommitsObj } from "../Commits/types";
import "./styles.css";

export const CommitsList: React.FC<{ commits: CommitsObj[] }> = ({
  commits,
}) => {
  if (!commits.length) {
    return null;
  }
  return (
    <ul className="commit">
      {commits.map(
        ({ id, authorName, commitMessage, commitTime }: CommitsObj) => (
          <li className="commit-item" key={id}>
            <span className="commit-message">{commitMessage}</span>

            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span className="commit-time">{timeSince(commitTime)}</span>
              <span className="commit-author"> by {authorName}</span>
            </div>
          </li>
        )
      )}
    </ul>
  );
};
