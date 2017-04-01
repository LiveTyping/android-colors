export const SET_PALETTE_COLOR = 'SET_PALETTE_COLOR';

export function setPaletteColor(name, colorCode) {
  return {
    type: SET_PALETTE_COLOR,
    payload: { name, colorCode },
  };
}
