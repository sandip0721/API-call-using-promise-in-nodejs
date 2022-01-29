const requestPromise = require('request-promise');
requestPromise('https://jsonplaceholder.typicode.com/users')
.then(body => console.log('Success', body))
.catch(err => console.log('Opps Error',err));