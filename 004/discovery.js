require('dotenv').config();

var watson = require('watson-developer-cloud');

var discovery = new watson.DiscoveryV1({
  username: process.env.username,
  password: process.env.password,
  version: 'v1',
  version_date: '2017-11-07'
});

discovery.query({ environment_id: 'system',
                  collection_id: 'news-en',
                  query: 'IBM Watson in healthcare' }, function(error, data) {

  console.log(JSON.stringify(data, null, 2));
});