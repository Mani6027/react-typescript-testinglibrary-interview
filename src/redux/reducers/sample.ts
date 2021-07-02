import * as types from "../types";

export interface SampleState {
  counter: number;
}

export interface SampleAction {
  type: string;
  count: number;
}

const initialState: SampleState = {
  counter: 0,
};

export default (state = initialState, action: SampleAction): SampleState => {
  switch (action.type) {
    case types.INCREMENT_ONE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case types.INCREMENT_BY_COUNT:
      return {
        ...state,
        counter: state.counter + action.count,
      };
    default:
      return state;
  }
};
