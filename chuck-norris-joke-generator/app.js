document.querySelector('.get-jokes').addEventListener('click', getJokes);
const loader = document.getElementById('loading');

function getJokes(e){
  const number = document.querySelector('input[type="number"]').value;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}` , true);
  xhr.onload = function(){
    let output = '';
    const reply = JSON.parse(this.responseText);
    const jokes = reply.value;
    jokes.forEach(function(joke){
      output += `
      <li>${joke.joke}</li>
      `
    })
    document.querySelector('.jokes').innerHTML = output;
  }
  xhr.send();
  e.preventDefault();
}