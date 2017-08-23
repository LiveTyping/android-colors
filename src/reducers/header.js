import { HIDE_HEADER_HELP, SHOW_HEADER_HELP } from '../actions/header';

const initialState = { isVisibleHeaderHelp: true };

// eslint-disable-next-line import/prefer-default-export
export function header(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case HIDE_HEADER_HELP:
      return {
        ...state,
        isVisibleHeaderHelp: false,
      };
    case SHOW_HEADER_HELP:
      return {
        ...state,
        isVisibleHeaderHelp: true,
      };
    default:
      return state;
  }
}
