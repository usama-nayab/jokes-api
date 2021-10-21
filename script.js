// GET https://icanhazdadjoke.com/

const joke = document.getElementById('jokes');
const button = document.getElementById('button');

// this is done by fetch api method

// const generateJokes = ()  => {

//     const setHeader = {
//         headers: {
//             Accept: 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com/' , setHeader)
//     .then((res) => res.json() )
//     .then((data) => joke.innerHTML = data.joke)
//     s
//     .catch((error) => {
//         console.log(error);
//     })
// }

// and this is done by the es8 async await <3

const generateJokes = async ()  => {

    try{
    const setHeader = {
        headers: {
            Accept: 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com/' , setHeader);
    const data = await res.json();
    joke.innerHTML = data.joke;   
    }
    catch (error) {
        console.log(error);
    }
}





button.addEventListener('click' , generateJokes);
generateJokes();