const utils = {};

utils.createDOMFromHTML = function (htmlString) {
  let div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
};

utils.capitalizeFirstLetter = function (htmlString) {
  if (htmlString) {
    return htmlString.charAt(0).toUpperCase() + htmlString.slice(1);
  } else return '';
};

export default utils;
