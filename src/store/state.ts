import { v4 } from "uuid";

export type State = {
  Upvotes: {
    notFill: UpvoteId[];
    selected: UpvoteId[];
    notSelected: UpvoteId[];
  };
};

export type UpvoteId = string;

export type UpvoteKey = keyof typeof state.Upvotes;

export const state: State = {
  // initialize state
  Upvotes: {
    notSelected: [v4()],
    selected: [v4()],
    notFill: [v4()],
  },
};
