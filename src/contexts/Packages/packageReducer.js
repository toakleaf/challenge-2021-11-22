import { POPULATE_ACTIVE_PROJECT } from "../types";

const packageReducer = (state, action) => {
  switch (action.type) {
    case POPULATE_ACTIVE_PROJECT:
      return {
        ...state,
        activeProject: action.payload,
      };
    default:
      return state;
  }
};

export default packageReducer;
