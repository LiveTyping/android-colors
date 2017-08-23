export const SET_PALETTE_COLOR = 'SET_PALETTE_COLOR';

function setPaletteColor(name, colorCode) {
  return {
    type: SET_PALETTE_COLOR,
    payload: { name, colorCode },
  };
}

function replaceUrlDataWith(dataParamName, newValue) {
  const paramUrl = window.location.href.split('?')[1];
  const url = window.location.href.split('?')[0];
  const params = paramUrl.split('&');
  const resultParamsUrl = params.map(param => {
    const paramName = param.split('=')[0];
    return paramName === dataParamName
      ? `${dataParamName}=${newValue}`
      : param;
  }).join('&');
  return url + '?' + resultParamsUrl;
}

function doesContinParam(searchParam) {
  const paramUrl = window.location.href.split('?')[1];
  if (!paramUrl) {
    return false;
  }
  const params = paramUrl.split('&');
  let doesContinParam = false;
  params.forEach(param => {
    const paramName = param.split('=')[0];
    if ( paramName === searchParam ) {
      doesContinParam = true;
    }
  });
  return doesContinParam;
}

export function changePaletteColor(name, colorCode) {
  return dispatch => {
    const linkContainColorName = doesContinParam(name);
    const separator = window.location.href.includes('?') ? '&' : '?';
    const newLink = linkContainColorName
      ? replaceUrlDataWith(name, colorCode)
      : `${window.location.href + separator + name}=${colorCode}`;
    window.history.pushState('', '', newLink);
    dispatch(setPaletteColor(name, colorCode));
  }
}