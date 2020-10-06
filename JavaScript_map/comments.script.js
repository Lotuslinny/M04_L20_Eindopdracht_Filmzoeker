/*const moviesModule = require("./script1.js");
const movies = moviesModule.movies;*/
/*Hierboven wordt er voor de import van de variabele movies gezorgd. Alleen nodig voor de terminal/
voor in de browser uitcommenten. */


//Ik kies hier voor function declarations voor de leesbaarheid!!!
function addImageToDom(array) {
  document.getElementById("main__list").innerHTML = '';
  array.forEach(element => {
    var listItem = document.createElement("li");
    // maak de a element aan voor dit element (net zoals wat je hieronder met img doet)    
    var link = document.createElement("a");
    //voeg waarde toe aan het href property <a href= de functie.. mag dat? ></a>
    link.href = combineUrlAndImdbID(element.imdbID);
    // maak element met naam image en tag <img>
    var image = document.createElement("img");
    //voeg waarde toe aan het src property <img src=element.Poster></img>
    image.src = element.Poster;
    //mijn eigen bonus: voeg alt toe aan afbeelding
    image.alt = "afbeelding van de film " + element.Title;
    // uitkomst is een html image element
    // pak de main__list, en plak het html image element en aan.
    childLi = document.getElementById("main__list").appendChild(listItem);
    childA = childLi.appendChild(link);
    childImage = childA.appendChild(image)
  })
};

function filterMovies(wordInMovieTitle) {
  addImageToDom(movies.filter(currentValue => currentValue.Title.includes(wordInMovieTitle)));
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
  //console.log(event.target);
  switch (event.target.value) {
    case "nieuwste-films":
      filterLatestMovies();
      //console.log("hey ik ben {nieuwste films} film");
      break;
    case "avengers":
      //code block
      filterMovies("Avengers");
      //console.log("hey ik ben {avengers} film");
      break;
    case "x-men":
      //code block
      filterMovies("X-Men");
      //console.log("hey ik ben {x-men} film");
      break;
    case "princess":
      filterMovies("Princess");
      //console.log("hey ik ben {princess} film");
      break;
    case "batman":
      //code block
      filterMovies("Batman");
      //console.log("hey ik ben {batman} film");
      break;
    default:
    //code block
    //console.log("default block wordt uitgevoerd");
  }

};


/* Schrijf dus een aparte functie die imdbID van de movie als argument krijgt en de juiste URL returned 
(je mag zelf een naam bedenken).  */
function combineUrlAndImdbID(imdbIDinMovie) {
  var urlMovies = `https://www.imdb.com/title/`;

  return urlMovies.concat(imdbIDinMovie);
};

//return urlMovies + imdbIDinMovie; werkt ook i.p.v. concat.


