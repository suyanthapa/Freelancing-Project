
const api = "https://api.chucknorris.io/jokes/random"; 


const getJokes = document.getElementById('getJokes'); 
const p = document.querySelector('p');

getJokes.addEventListener('click', async () => {
  try {
    // Fetch joke from API
    const responses = await fetch(api);
    const extractData = await responses.json(); 
    const joke = extractData.value; 
    let jokes=joke.replace(/Chuck Norris/, "Bishal ");
    // Update DOM
    p.innerHTML = jokes;
    
  } catch (e) {
    p.innerText = 'Sorry, could not fetch a joke!';
  }
});
