import { SET_PALETTE_COLOR } from '../actions/palette';

const initialState = {
  DARK_PRIMARY: { color: '#303F9F', alpha: 1 },
  PRIMARY: { color: '#3F51B5', alpha: 1 },
  ACCENT: { color: '#F44336', alpha: 1 },
  PRIMARY_TEXT: { color: '#1F1F1F', alpha: 0.87 },
  SECONDARY_TEXT: { color: '#757575', alpha: 0.54 },
  INVERSED_PRIMARY_TEXT: { color: '#FFFFFF', alpha: 1 },
  DISABLED_PRIMARY_TEXT: { color: '#949494', alpha: 0.38 },
  INVERSED_SECONDARY_TEXT: { color: '#FFFFFF', alpha: 0.7 },
  DISABLED_SECONDARY_TEXT: { color: '#B3B3B3', alpha: 0.38 },
  HINT_TEXT: { color: '#9E9E9E', alpha: 0.38 },
  NORMAL_CONTROL: { color: '#757575', alpha: 1 },
  ACTIVATED_CONTROL: { color: '#00FF00', alpha: 1 },
  HIGHLIGHT_CONTROL: { color: '#CCCCCC', alpha: 1 },
  BUTTON_NORMAL: { color: '#6D6D6D', alpha: 1 },
};

// eslint-disable-next-line import/prefer-default-export
export function palette(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_PALETTE_COLOR:
      return payload.name in state ?
        Object.assign(
          {},
          state,
          { [payload.name]: { color: payload.colorCode.toUpperCase(), alpha: state[payload.name].alpha } }) :
        Object.assign({}, state);
    default:
      return state;
  }
}
