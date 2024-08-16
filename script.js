const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];



// Created an event listener which will trigger when the user types.
input.addEventListener('keyup', function(e) {
  let str = e.target.value;
  suggestions.replaceChildren()//Resetting the div to empty
  showSuggestions(search(str));
})

//  Based on the input i.e. string provided by the user, an array is returned which contains the fruit's name that has that input.
function search(str) {
  let results = fruit.filter((fruitname) => {
    if (fruitname.toLowerCase().includes(str.toLowerCase())) {
      return fruit;
    }
  });
  return results;
}


// Upon providing the array returned in the search() function, this function displays the fruit's list as a dropdown.
function showSuggestions(results) {
  const dropDown = document.createElement("section");
  dropDown.classList.add('drop-down');
  results.forEach((fruitname) => {
    let option = document.createElement("option");
    option.classList.add('list');
    option.value = fruitname;
    option.innerText = fruitname;
    dropDown.appendChild(option);
    suggestions.appendChild(dropDown);

    //Add an event listener to highlight the selected fruit when hovered.
    option.addEventListener('mouseover', function() {
      option.style.backgroundColor = "#b36565";
    });

    option.addEventListener('mouseout', function() {//Doubt??????
      option.style.background = "gray";
    });

    // When a user clicks on any one of the suggestions, populate the search bar with that suggestion.
    option.addEventListener('click', function() {
      input.value = option.value;
    });
  });
  return suggestions;
}
