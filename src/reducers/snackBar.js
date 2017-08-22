import { SHOW_SNACK_BAR, CLOSE_SNACK_BAR } from '../actions/snackBar';

const initialState = {
  isVisible: false,
  text: '',
};
// eslint-disable-next-line import/prefer-default-export
export function snackBar(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SHOW_SNACK_BAR:
      return {
        ...state,
        isVisible: true,
        text: payload.text,
      };
    case CLOSE_SNACK_BAR:
      return {
        ...state,
        isVisible: false,
        text: '',
      };
    default:
      return state;
  }
}
