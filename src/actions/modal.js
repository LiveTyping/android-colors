export const SHOW_CODE_MODAL = 'SHOW_CODE_MODAL';
export const CLOSE_CODE_MODAL = 'CLOSE_CODE_MODAL';

export function showPaletteCodeModal() {
  return {
    type: SHOW_CODE_MODAL,
  };
}

export function closePaletteCodeModal() {
  return {
    type: CLOSE_CODE_MODAL,
  };
}
