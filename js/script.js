var elList = document.querySelector("#pokemon_list");

var newPokemon = pokemons;
function renderPokemon(array, place) {
  elList.innerHTML = null;
  for (var item of newPokemon) {
    // Creating Li element
    var newLi = document.createElement("li");
    newLi.classList.add("col-3", "mb-3");
    // Creating DIV element
    var newDiv = document.createElement("div");
    newDiv.classList.add("card", "wrapper");
    // Creating Img element
    var newImg = document.createElement("img");
    newImg.setAttribute("src", item.img);
    newImg.setAttribute("class", "card-img-top");
    newImg.setAttribute("alt", "card-img");
    newImg.setAttribute("height", "180rem");
    // Creating innerDIV element
    var newInnerDiv = document.createElement("div");
    newInnerDiv.classList.add("card", "border-0");
    newInnerDiv.setAttribute("width", "18rem");
    // Creating heading h3 element
    var newHeading = document.createElement("h3");
    newHeading.classList.add("card-title", "text-center");
    newHeading.textContent = item.name;
    // Creating P, P2, P3, element
    var newP = document.createElement("p");
    newP.setAttribute("class", "card-text text-center");
    newP.textContent = item.type;
    var newP2 = document.createElement("p");
    newP2.setAttribute("class", "card-text text-center");
    newP2.textContent = item.weight;
    var newP3 = document.createElement("p");
    newP3.setAttribute("class", "card-text text-center");
    newP3.textContent = item.height;
    // ADD elements
    newInnerDiv.appendChild(newHeading);
    newInnerDiv.appendChild(newP);
    newInnerDiv.appendChild(newP2);
    newInnerDiv.appendChild(newP3);
    newDiv.appendChild(newImg);
    newDiv.appendChild(newInnerDiv);
    newLi.appendChild(newDiv);
    elList.appendChild(newLi);
  }
}
renderPokemon(pokemons);
