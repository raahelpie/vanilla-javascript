// function getText(){
//   fetch('test.txt')
//     .then(function(response){
//       return response.text();
//     })
//     .then(function(data){
//       console.log(data);
//       document.getElementById('output').innerHTML = data;
//     })
//     .catch(function(err){
//       console.log(err);
//     })
// }

const getText = () => {
  fetch('test.txt')
  .then(response => response.text())
  .then(data => document.getElementById('output').innerHTML = data)
}

// function getJSON(){
//   fetch('posts.json')
//     .then(function(response){
//       return response.json();
//     })
//     .then(function(data){
//       console.log(data);
//       let output = '';
//       data.forEach(function(post){
//         output += `
//         <li>Title: ${post.title}, Body: ${post.body}</li>
//         `
//       })
//       document.getElementById('output').innerHTML = output;
//     })
//     .catch(function(err){
//       console.log(err);
//     })
// }

const getJSON = () => {
  fetch('posts.json')
  .then(response => response.json())
  .then(data => {
    let output = '';
    data.forEach(post => {
      output += `
         <li>Title: ${post.title}, Body: ${post.body}</li>
         `
    })
    document.getElementById('output').innerHTML = output;
  })
}

// function getAPIData(){
//   fetch('https://api.github.com/users')
//     .then(function(response){
//       return response.json();
//     })
//     .then(function(data){
//       console.log(data);
//       let output = '';
//       data.forEach(function(user){
//         output += `
//         <li><b>ID</b>: ${user.login}, <b>URL</b>: <a href="${user.html_url}">GO</a></li>
//         `
//       })
//       document.getElementById('output').innerHTML = output;
//     })
//     .catch(function(err){
//       console.log(err);
//     })
// }

const getAPIData = () => {
  fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(user => {
        output += `
        <li><b>ID</b>: ${user.login}, <b>URL</b>: <a href="${user.html_url}">GO</a></li>
        `
      })
      document.getElementById('output').innerHTML = output;
    })
    .catch(err=> console.log(err))
}

document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getAPIData);