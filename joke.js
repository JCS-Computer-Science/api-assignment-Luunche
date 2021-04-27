function randomColor() {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}
 
document.getElementById("press").style.backgroundColor = randomColor();
 
function generateFunny() {
    fetch("https://official-joke-api.appspot.com/jokes/random", {
        method: 'GET'
    })
    .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        document.getElementById("joke").innerHTML = data.setup
        console.log('Success:', data);
        document.getElementById("punchline").innerHTML = data.punchline
    })
    .catch((error) => {
        console.error('Error', error);
    });
    document.getElementById("buttons").style.color = randomColor();
}

function randomBColor() {
    var randomBColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomBColor;
}

document.body.style.backgroundColor = randomBColor();