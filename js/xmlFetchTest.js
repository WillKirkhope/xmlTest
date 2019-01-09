var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
const apiUrl = 'https://dx1.azure-api.net/iod/72b02b78-5fdd-4f4b-80b2-cf3229d16645'

fetch(apiUrl, {
  mode: 'no-cors'
})
  .then(response => response.text())
  .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
  .then(data => console.log(data))
