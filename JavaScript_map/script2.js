/* Ik kies hier voor function declarations voor de leesbaarheid!!! Zie nog meer comments van alle standaard requirements
bij comments.script.js!!!
 */
function addImageToDom(array) {
  document.getElementById("main__list").innerHTML = '';
  array.forEach(element => {
    var listItem = document.createElement("li");
    var link = document.createElement("a");
    link.href = combineUrlAndImdbID(element.imdbID);
    var image = document.createElement("img");
    image.src = element.Poster;
    image.alt = "afbeelding van de film " + element.Title;
    childLi = document.getElementById("main__list").appendChild(listItem);
    childA = childLi.appendChild(link);
    childImage = childA.appendChild(image)
  })
};
/* Ik wil dat beide parameters: currentValue.Title en wordInMovieTitle in Uppercase worden uitgevoerd, zodat de gebruiker geen rekening 
hoeft te houden met Hoofdletters (uppercase) of kleine letters (lowercase). Vergeet niet dat toUpperCase een functie is, dus ().
 */
function filterMovies(wordInMovieTitle) {
  addImageToDom(movies.filter(currentValue => currentValue.Title.toUpperCase().includes(wordInMovieTitle.toUpperCase())));
};

function filterLatestMovies() {
  addImageToDom(movies.filter(currentValue => parseInt(currentValue.Year) >= 2014));
};

var filteredMovies = document.getElementsByName("film-filter");
filteredMovies.forEach(movie => {
  movie.addEventListener("change", function (event) {
    handleOnChangeEvent(event);
  })
});

function handleOnChangeEvent(event) {
  switch (event.target.value) {
    case "nieuwste-films":
      filterLatestMovies();
      break;
    case "avengers":
      filterMovies("Avengers");
      break;
    case "x-men":
      filterMovies("X-Men");
      break;
    case "princess":
      filterMovies("Princess");
      break;
    case "batman":
      filterMovies("Batman");
      break;
    default:
  }
};

function combineUrlAndImdbID(imdbIDinMovie) {
  var urlMovies = `https://www.imdb.com/title/`;

  return urlMovies.concat(imdbIDinMovie);
};

/* Bonus Requirements
Als gebruiker kan ik in een inputfield de
titel van een film invullen, wanneer ik op
enter druk worden de films gefilterd op de titel die ik heb ingevuld.
 */

const input = document.querySelector('input[type="search"]');
input.addEventListener('search', (event) => {
  console.log("The term searched for was " + input.value);
  filterMovies(input.value);
});

