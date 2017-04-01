import { SET_PALETTE_COLOR } from '../actions/palette';

const initialState = {
  DARK_PRIMARY: '#303F9F',
  PRIMARY: '#3F51B5',
  ACCENT: '#F44336',
  PRIMARY_TEXT: '#1F1F1F',
  SECONDARY_TEXT: '#757575',
  INVERSED_PRIMARY_TEXT: '#FFFFFF',
  DISABLED_PRIMARY_TEXT: '#949494',
  INVERSED_SECONDARY_TEXT: '#FFFFFF',
  DISABLED_SECONDARY_TEXT: '#B3B3B3',
  HINT_TEXT: '#9E9E9E',
  NORMAL_CONTROL: '#757575',
  ACTIVATED_CONTROL: '#F44336',
  HIGHLIGHT_CONTROL: '#CCCCCC',
  BUTTON_NORMAL: '#6D6D6D',
};

// eslint-disable-next-line import/prefer-default-export
export function palette(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_PALETTE_COLOR:
      return payload.name in state ?
        Object.assign({}, state, { [payload.name]: payload.colorCode.toUpperCase() }) :
        Object.assign({}, state);
    default:
      return state;
  }
}
