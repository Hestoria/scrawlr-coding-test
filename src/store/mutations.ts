import { MutationTree } from "vuex";
import { State, UpvoteId, UpvoteKey } from "./state";

export enum MutationType {
  AddItem = "ADD_ITEM",
  MoveItem = "MOVE_ITEM",
}

export type Mutations = {
  [MutationType.MoveItem](
    state: State,
    payload: {
      fromUpvoteType: UpvoteKey;
      toUpvoteType: UpvoteKey;
    }
  ): void;
  [MutationType.AddItem](
    state: State,
    payload: {
      upvoteType: UpvoteKey;
      data: UpvoteId;
    }
  ): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.MoveItem](state, payload) {
    const { fromUpvoteType, toUpvoteType } = payload;
    state.Upvotes[toUpvoteType] = [
      ...state.Upvotes[toUpvoteType],
      ...state.Upvotes[fromUpvoteType],
    ];
    state.Upvotes[fromUpvoteType] = [];
  },
  [MutationType.AddItem](state, payload) {
    const { upvoteType, data } = payload;
    state.Upvotes[upvoteType] = [...state.Upvotes[upvoteType], data];
  },
};
