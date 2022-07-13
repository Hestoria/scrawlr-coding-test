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
  Upvotes: {
    notSelected: [],
    selected: [],
    notFill: [],
  },
};
