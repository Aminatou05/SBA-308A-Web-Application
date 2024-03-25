// module3.js
export const PI = 3.14;

export function square(x) {
    return x * x;
}

 // post method
 const pokemonName = 'pikachu';
 const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
 
 fetch(apiUrl)
   .then(response => response.json())
   .then(data => {
     console.log(`Name: ${data.name}`);
     console.log(`Height: ${data.height} decimeters`);
     console.log(`Weight: ${data.weight} hectograms`);
     console.log(`Abilities: ${data.abilities.map(ability => ability.ability.name).join(', ')}`);
   })
   .catch(error => console.error('Error fetching data:', error));


