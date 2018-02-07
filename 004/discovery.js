var watson = require('watson-developer-cloud');

var discovery = new watson.DiscoveryV1({
  username: '',
  password: '',
  version: 'v1',
  version_date: '2017-11-07'
});

// discovery.getEnvironments({}, function(error, data) {
//   console.log(JSON.stringify(data, null, 2));
// });

discovery.query({ environment_id: 'system',
                  collection_id: 'news-en',
                  query: 'IBM Watson in healthcare' }, function(error, data) {
  console.log(JSON.stringify(data, null, 2));
});