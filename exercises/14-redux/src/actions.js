import * as types from "./constants/actionTypes";

export const increaseCount = () => {
  return {
    type: types.INCREASE_COUNT
  };
};

export const decreaseCount = () => {
  return {
    type: types.DECREASE_COUNT
  };
};

export const toggle = () => {
  return {
    type: types.TOGGLE
  };
};

export const pickColor = color => {
  return {
    type: types.PICK_COLOR
  };
};

export const setInput = todoInput => {
  // Complete me
};

export const addTodo = () => {
  // Complete me
};
