import * as types from "./constants/actionTypes";

const reducer = (
  /**
   * Starting state.
   * You may want to add more values here
   */
  state = {
    count: 0,
    isVisible: false,
    todos: ["Finish this assignment", "Read a book"]
  },
  action
) => {
  console.log("action", action);
  switch (action.type) {
    case types.INCREASE_COUNT:
      return {
        ...state,
        count: state.count + 1
      };
    /**
     * Add additional case statements here
     */
    case types.DECREASE_COUNT:
      return {
        ...state,
        count: state.count - 1
      };
    case types.TOGGLE:
      return {
        ...state,
        isVisible: true
      };
    case types.PICK_COLOR:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;
