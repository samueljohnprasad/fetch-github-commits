import { RepoDetails } from "../Commits/types";

export type UserFormProps = {
    submitHandler: (value: RepoDetails) => void | string;
};
