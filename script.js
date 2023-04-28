console.log('funguju!');

// fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5')
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//         document.querySelector('.vychod').innerHTML = `Východ slunce: ${data.results.sunrise}`;
//         document.querySelector('.zapad').innerHTML = `Západ slunce: ${data.results.sunset}`;
//     })

const buttonElm = document.querySelector('.button');

const zobraz = () => {
    // console.log('klik');
    fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        document.querySelector('.vychod').innerHTML = `Východ slunce: ${data.results.sunrise}`;
        document.querySelector('.zapad').innerHTML = `Západ slunce: ${data.results.sunset}`;
    })
}

buttonElm.addEventListener('click', zobraz);