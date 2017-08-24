export const HIDE_HEADER_HELP = 'HIDE_HEADER_HELP';
export const SHOW_HEADER_HELP = 'SHOW_HEADER_HELP';

function hideHeaderHelp() {
  return {
    type: HIDE_HEADER_HELP,
  };
}

function showHeaderHelp() {
  return {
    type: SHOW_HEADER_HELP,
  };
}

export function setHelpBlockHidden() {
  window.localStorage.setItem('isVisibleHeaderHelpBlock', false);
  return (dispatch) => dispatch(hideHeaderHelp());
}

export function setInitialHelpBlockVisiblity() {
  const isVisibleHelpBlock = window.localStorage.getItem('isVisibleHeaderHelpBlock') === 'true';
  const isfirstPageLoad = window.localStorage.getItem('isVisibleHeaderHelpBlock') === null;
  return (dispatch) => {
    if (isfirstPageLoad) {
      window.localStorage.setItem('isVisibleHeaderHelpBlock', true);
      dispatch(showHeaderHelp());
    } else {
      isVisibleHelpBlock ? dispatch(showHeaderHelp()) : dispatch(hideHeaderHelp());
    }
  };
}
