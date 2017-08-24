import { getParamsFromUrl, doesContainParam, replaceUrlDataWith } from '../helpers/urlDataParsers';

export const SET_PALETTE_COLOR = 'SET_PALETTE_COLOR';
export const SET_NEW_PALETTE = 'SET_NEW_PALETTE';

export function setPaletteColor(name, colorCode) {
  return {
    type: SET_PALETTE_COLOR,
    payload: { name, colorCode },
  };
}

function setNewPalette(palette) {
  return {
    type: SET_NEW_PALETTE,
    payload: { palette },
  };
}

export function changePaletteColor(name, colorCode) {
  return (dispatch) => {
    const colorCodeWithoutHash = colorCode.replace('#', '');
    const linkContainColorName = doesContainParam(name);
    const separator = window.location.hash.includes('?') ? '&' : '?';
    const newLink = linkContainColorName
      ? replaceUrlDataWith(name, colorCodeWithoutHash)
      : `${window.location.href + separator + name}=${colorCodeWithoutHash}`;
    window.history.pushState('', '', new URL(newLink));
    dispatch(setPaletteColor(name, colorCode));
  };
}

export function setInitialPaletteColors() {
  return (dispatch, getState) => {
    const params = getParamsFromUrl(window.location.hash);
    if (!params) {
      return;
    }

    const { palette } = getState();
    const newPalette = params.reduce((currentPalette, param) => {
      const colorName = param.split('=')[0];
      const colorCode = `#${param.split('=')[1]}`;
      return {
        ...currentPalette,
        [colorName]: { ...currentPalette[colorName], color: colorCode },
      };
    }, palette);

    dispatch(setNewPalette(newPalette));
  };
}
