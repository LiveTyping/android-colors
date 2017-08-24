export function getParamsFromUrl(url) {
  const paramUrl = url.split('?')[1];
  if (!paramUrl) {
    return null;
  }
  return paramUrl.split('&');
}

export function replaceUrlDataWith(dataParamName, newValue) {
  const params = getParamsFromUrl(window.location.hash);
  const url = window.location.href.split('?')[0];
  const resultParamsUrl = params.map((param) => {
    const paramName = param.split('=')[0];
    return paramName === dataParamName
      ? `${dataParamName}=${newValue}`
      : param;
  }).join('&');
  return `${url}?${resultParamsUrl}`;
}

export function doesContainParam(searchParam) {
  const paramUrl = window.location.hash.split('?')[1];
  if (!paramUrl) {
    return false;
  }
  const params = paramUrl.split('&');
  let isContainParam = false;
  params.forEach((param) => {
    const paramName = param.split('=')[0];
    if (paramName === searchParam) {
      isContainParam = true;
    }
  });
  return isContainParam;
}
