import { TEST } from "./actionTypes";

const initialState = {
  test: '',
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        test: action.text,
      }
    default:
      return state
  }
}

