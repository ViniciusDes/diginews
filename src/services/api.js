export function getExeRss() {
  return fetch(process.env.REACT_APP_API_URL_)
    .then((response) => response.text())
    .then((JSON) => new window.DOMParser().parseFromString(JSON, "text/xml"));
}
