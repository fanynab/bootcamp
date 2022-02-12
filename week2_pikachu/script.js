async function fetchData() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/25", {
        method: "GET"
    });
  
    const json = await response.json();
    const pokeId = json.id;
    const name = json.name;
    const sprite = json.sprites.front_default;
    const type = json.types[0].type.name;

    console.log(`${pokeId} : ${name}`);
    console.log(sprite);
    console.log(`type: ${type}`);
    
    const result = document.getElementById("pikachu");
    const pokeData = document.createElement("div");
    pokeData.innerHTML = `<p>${pokeId} : ${name}</p> <img src="${sprite}"> <p>type: ${type}</p>`;
    pokeData.style.backgroundColor = "yellow";
    pokeData.style.padding = "15px 30px";
    result.append(pokeData);
}
