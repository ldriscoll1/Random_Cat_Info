"use strict";
//Getting Data from html
const btn = document.querySelector(".btn");
const catBreed = document.querySelector("#breed");
const catImage = document.querySelector("#image");
const textFamilyFriendly = document.querySelector("#familyFriendly");
const textShedding = document.querySelector("#shedding");
const textHealth = document.querySelector("#health");
const textPlayfulness = document.querySelector("#playfulness");
const textMeowing = document.querySelector("#meowing");
const textGrooming = document.querySelector("#grooming");
const textintelligence = document.querySelector("#intelligence");
const textlifeExpectency = document.querySelector("#lifeExpectency");
const textOrigin = document.querySelector("#origin");
const textLength = document.querySelector("#length");
const textWeight = document.querySelector("#minWeight");
const texts = document.querySelectorAll(".text");
const catBreeds = [
  "aegean",
  "ragdoll",
  "persian",
  "Sphynx",
  "Abyssinian",
  "Asian",
  "Balinese",
  "Bambino",
  "Bengal",
  "Birman",
  "Bombay",
  "Burmese",
  "Burmilla",
  "Chartreux",
  "Chausie",
  "Cyprus",
  "Foldex",
  "Korat",
  "LaPerm",
  "Ocicat",
  "Serengeti",
  "Siamese",
  "Snowshoe",
  "Somali",
  "Toyger",
];

for (const element of texts) {
  element.style.opacity = 0;
}
//Adding in Button Functionality
btn.addEventListener("click", function (e) {
  for (const element of texts) {
    element.style.opacity = 0;
  }
  const styles = e.currentTarget.classList;
  //Setting Up Fetch
  //Get random catnam
  const randomPosition = Math.floor(Math.random() * catBreeds.length);
  const randomBreed = catBreeds.at(randomPosition);
  const url =
    "https://cats-by-api-ninjas.p.rapidapi.com/v1/cats" +
    "?name=" +
    randomBreed;
  //Waiting Image
  catImage.style.opacity = 100;
  catImage.src =
    "http://phette23.github.io/speed-is-a-feature/img/loadingBar.gif";

  fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "cats-by-api-ninjas.p.rapidapi.com",
      "x-rapidapi-key": "951da403b2msh53d85db6b32d03ap199da6jsn3fb0e83fb11e",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      //Gets the anime section of the JSON
      try {
        const catInfo = response[0];
        //Look through properties of the anime and get Name, image, Summary and Rating
        const {
          image_link = "",
          name = "",
          length = "",
          origin = "",
          family_friendly = "",
          shedding = "",
          general_health = "",
          playfulness = "",
          meowing = "",
          grooming = "",
          intelligence = "",
          min_weight = "",
          min_life_expectancy: life_expectancy = "",
        } = catInfo;

        catBreed.textContent = `${name} Cat`;
        catImage.src = `${image_link}`;
        catImage.alt = `${image_link}`;
        textFamilyFriendly.textContent = `Family Friendly: ${family_friendly} `;
        textShedding.textContent = `Shedding: ${shedding} `;
        textHealth.textContent = `Health: ${general_health} `;
        textPlayfulness.textContent = `Playfullness: ${playfulness} `;
        textMeowing.textContent = `Meowing: ${meowing} `;
        textGrooming.textContent = `Grooming: ${grooming} `;
        textintelligence.textContent = `Intelligence: ${intelligence} `;
        textlifeExpectency.textContent = `Life Expectancy: ${life_expectancy} `;
        textOrigin.textContent = `Origin: ${origin} `;
        textLength.textContent = `Length: ${length} `;
        textWeight.textContent = `Weight: ${min_weight} `;
        for (const element of texts) {
          element.style.opacity = 100;
        }
      } catch (err) {
        alert(`Error: ${err}`);
      }
    })
    .catch((error) => (animeName.textContent = "Error"));
});
