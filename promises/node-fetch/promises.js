const fetch = require('node-fetch');

const request = (url) => new Promise((resolve, reject) => {
  fetch(url)
    .then((response) => {
      if (response.status === 200)
        resolve('fetched page successfully');
      else
        reject(Error(`got HTTP status code ${response.status}`));
    })
});

request('https://api.nasa.gov/neo/rest/v1/feed' +
        '?api_key=DEMO_KEY&start_date=2018-08-20')
  .then(message => console.log(message))
  .catch(error => console.error(error.message));

request('https://api.nasa.gov/neo/rest/v1/feed' +
        '?api_key=DEMO_KEY&start_date=2018-80-20')
  .then(message => console.log(message))
  .catch(error => console.error(error.message));