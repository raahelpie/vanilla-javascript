const http = new EasyHTTP;

// Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
// .then((data) => console.log(data))
// .catch((error) => console.log(error));

const data = {
    name: 'Raahel Baig',
    username: 'raahelpie',
    email: 'bro@g.com'
}

// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then((data) => console.log(data))
// .catch((error) => console.log(error));


http.put('https://jsonplaceholder.typicode.com/users/1', data)
.then((data) => console.log(data))
.catch((error) => console.log(error));


// http.delete('https://jsonplaceholder.typicode.com/users/1')
// .then((data) => console.log(data))
// .catch((error) => console.log(error));