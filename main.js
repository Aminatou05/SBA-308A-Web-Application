// // // main.js
// // // import { greet, someData } from './modules/module1.js';
// // // import { calculateSum } from './modules/module2.js';
// // // import { PI, square } from '././modules/module3.js';
// // // console.log(greet('Ahmet')); // Output: Hello, Ahmet!
// // // console.log(someData); // Output: [1, 2, 3]
// // // // const numbers = [10, 20, 30];
// // // // console.log(calculateSum(numbers)); // Output: 60
// // // // console.log(PI); // Output: 3.14
// // // // console.log(square(5)); // Output: 25
 // Use the fetch API or Axios to communicate with an external web
// // // // API. Use the data provided by this API to populate your
// // // // application’s content and features.
const API_URL = 'https://api.thecatapi.com/v1/images/search';
const API_KEY = 'llive_jjJ7OH8MuED2GuMJk8fSG59vPgULkS2FrNOGRLHAasIcAfZiUK6fFNYCdj8NoBsQ';

// async function getQuranData() {
//     try {
//       const response = await fetch("http://api.alquran.cloud/v1/meta");
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//     getQuranData();
//   }
 
//   document.getElementById("myBtn").addEventListener("click", testRequest);

//   async function testRequest() {
//     let inputVal = document.getElementById("myInput").value;
//     let requestBody = { data: inputVal };
//     console.log(requestBody);

//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos",
//       {
//         method: "POST",
//         body: JSON.stringify(requestBody),
//         headers: {
//           "Content-Type": "application/json; charset=UTF-8",
//         },
//       }
//     );

//     alertResponse(response);
//   }

//   async function alertResponse(response) {
//     if (response.ok) {
//       const textData = await response.text();
//       alert(textData);
//     } else {
//       alert(
//         "The request returned a status other than 200 OK: " +
//           response.status
//       );
//     }
//   }

//   const dog = document.getElementById("dog");
//   dog.addEventListener("click", getNewDog);

//   async function getNewDog() {
//     dog.style.cursor = "wait";
//     const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
//     // console.log(response);
//     const jsonData = await response.json();
//     // console.log(jsonData);
//     const url = jsonData.message;

//     dog.src = url;
//     dog.style.cursor = "pointer";
//   }

//   getNewDog();
// post method
// const pokemonName = 'pikachu';
// const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => {
//     console.log(`Name: ${data.name}`);
//     console.log(`Height: ${data.height} decimeters`);
//     console.log(`Weight: ${data.weight} hectograms`);
//     console.log(`Abilities: ${data.abilities.map(ability => ability.ability.name).join(', ')}`);
//   })
//   .catch(error => console.error('Error fetching data:', error));

// main.js

// We’ll be building a page that fetches a random cocktail recipe.
// making a  request using the Fetch API
// Function to fetch a new recipe
async function fetchNewRecipe() {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const data = await response.json();
    displayCocktail(data);
}
// Function to display the cocktail
function displayCocktail(data) {
    const cocktail = data.drinks[0];
    const cocktailDiv = document.getElementById("cocktail");
    cocktailDiv.innerHTML = ''; // Clear previous content
    // cocktail name
    const cocktailName = cocktail.strDrink;
    const heading = document.createElement("h1");
    heading.innerHTML = cocktailName;
    cocktailDiv.appendChild(heading);
    // cocktail image
    const cocktailImg = document.createElement("img");
    cocktailImg.src = cocktail.strDrinkThumb;
    cocktailDiv.appendChild(cocktailImg);
    document.body.style.backgroundImage = "url('" + cocktail.strDrinkThumb + "')";
    // cocktail ingredients
    const cocktailIngredients = document.createElement("ul");
    cocktailDiv.appendChild(cocktailIngredients);
    const getIngredients = Object.keys(cocktail)
        .filter(function (ingredient) {
            return ingredient.indexOf("strIngredient") == 0;
        })
        .reduce(function (ingredients, ingredient) {
            if (cocktail[ingredient] != null) {
                ingredients[ingredient] = cocktail[ingredient];
            }
            return ingredients;
        }, {});
    for (let key in getIngredients) {
        let value = getIngredients[key];
        listItem = document.createElement("li");
        listItem.innerHTML = value;
        cocktailIngredients.appendChild(listItem);
    }
}
// Event listener for the button
document.getElementById("newRecipeBtn").addEventListener("click", fetchNewRecipe);
// Display initial recipe when page loads
fetchNewRecipe();




