const url = require('url');

const myurl = new URL('https://nodejs.org:8000/dist/latest-v16.x/docs/api/url.html?id=100&status=active');

//getting serialized url

console.log(myurl.href);
//or
console.log(myurl.toString());

//get host or root domain retun with port number if give
console.log(myurl.host);

//get hostname only hostname
console.log(myurl.hostname);

//path name
console.log(myurl.pathname);

//serialized query
console.log(myurl.search);

//get object from query using params
console.log(myurl.searchParams);

//add params
myurl.searchParams.append('name','chance nyasulu')
console.log(myurl.href);
console.log(myurl.searchParams);

// loop through params

myurl.searchParams.forEach((V, K) => console.log(`${K}: ${V}`));
    

