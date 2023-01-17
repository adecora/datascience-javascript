const fetch = require('node-fetch');

url = 'https://api.nasa.gov/neo/rest/v1/feed' +
      '?api_key=DEMO_KEY&start_date=2018-80-20'; // illegal date

try {
  fetch(url);
} catch (err) {
  console.log(err);
}