export function getExeRss() {
  return fetch("http://api.exeoutsourcing.com.br/rss")
    .then(response => response.text())
    .then(JSON => new window.DOMParser().parseFromString(JSON, "text/xml"));
}
