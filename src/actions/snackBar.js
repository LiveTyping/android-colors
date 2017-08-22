export const SHOW_SNACK_BAR = 'SHOW_SNACK_BAR';
export const CLOSE_SNACK_BAR = 'CLOSE_SNACK_BAR';

export function showSnackBarWithText(text) {
  return {
    type: SHOW_SNACK_BAR,
    payload: { text },
  };
}

export function closeSnackBar() {
  return {
    type: CLOSE_SNACK_BAR,
  };
}
