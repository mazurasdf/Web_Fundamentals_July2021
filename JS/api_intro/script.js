console.log("hey it's me!");

var image = document.getElementById("pokemon");
var title = document.getElementById("title");
var input = document.getElementById("input");

async function getPokemon(){
    console.log(input.value);

    var response = await fetch("https://pokeapi.co/api/v2/pokemon/" + input.value);
    var data = await response.json();

    console.log(data);
    image.src = data.sprites.front_default;
    image.alt = data.name;
    title.innerText = data.name;
}