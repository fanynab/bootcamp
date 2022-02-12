 async function fetchData() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30", {
        method: "GET"
    });
  
    const json = await response.json();
    const results = json.results;
	
    for (i=0; i<results.length; i++) {
        fetch(results[i].url)
        .then(response => response.json())
        .then(response => {
            const pokeId = response.id;
            const name = response.name;
            const sprite = response.sprites.front_default;
            const type = response.types[0].type.name
            
            console.log(`${pokeId} : ${name}`);
            console.log(sprite);
            console.log(type);

            const result = document.getElementById("pokemon");
            const pokeData = document.createElement("div");
            pokeData.innerHTML = `<p>${pokeId} : ${name}</p> <img src="${sprite}"> <p>type: ${type}</p>`;
            pokeData.style.padding = "15px 30px";
            result.append(pokeData);

            if (type === "grass") {
                pokeData.style.backgroundColor = "#7AC74C";
            }
            else if (type === "fire") {
                pokeData.style.backgroundColor = "#EE8130";
            }
            else if (type === "water") {
                pokeData.style.backgroundColor = "#6390F0";
            }
            else if (type === "bug") {
                pokeData.style.backgroundColor = "#A6B91A";
            }
            else if (type === "normal") {
                pokeData.style.backgroundColor = "#A8A77A";
            }
            else if (type === "poison") {
                pokeData.style.backgroundColor = "#A33EA1";
            }
            else if (type === "electric") {
                pokeData.style.backgroundColor = "#F7D02C";
            }
            else {
                pokeData.style.backgroundColor = "#E2BF65";
            }
        });
    }
}
