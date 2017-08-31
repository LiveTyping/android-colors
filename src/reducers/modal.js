import { SHOW_CODE_MODAL, CLOSE_CODE_MODAL } from '../actions/modal';

const initialState = {
  isVisible: false,
};

// eslint-disable-next-line import/prefer-default-export
export function modal(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case SHOW_CODE_MODAL:
      return {
        ...state,
        isVisible: true,
      };
    case CLOSE_CODE_MODAL:
      return {
        ...state,
        isVisible: false,
      };
    default:
      return state;
  }
}

