import * as ActionTypes from "../actions/actionTypes";

const initialState = {
  notes: [],
  loading: true,
  error: {},
};

export const notes = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.GET_NOTES:
      return {
        ...state,
        notes: payload,
        loading: false,
      };

    case ActionTypes.DELETE_NOTE:
      var dummy = Object.assign({}, state);
      dummy = dummy.notes.filter((item) => {
        if (item.noteId !== payload) return item;
      });
      return {
        ...state,
        loading: false,
        error: {},
        notes: dummy,
      };

    case ActionTypes.NOTES_FAILED:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case ActionTypes.NOTES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.ADD_NOTE:
      return {
        ...state,
        loading: false,
        error: {},
        notes: [payload].concat(state.notes),
      };
    default:
      return state;
  }
};
