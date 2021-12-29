const baseURL = "https://imdb-api.com/API/AdvancedSearch";
const APIKey = "k_d0n70ap7?";
let resultsElement = document.getElementById('results');
let buttonElement = document.getElementById('pickMovies');
let tableElement = document.getElementById('genreSearch');


buttonElement.addEventListener('click', (event) => {
    event.preventDefault();
    fetchResults();
    return false;
})

 function movieData(movie, poster, rating) {
     //Create movie cards
     let movieCard = document.createElement('section')
     let movieTitle = document.createElement('h3');
     let imDbRating = document.createElement('h4');
     let moviePoster = document.createElement('img');

     movieTitle.innerText = movie;
     imDbRating.innerText = rating;
     moviePoster.src = poster;
    //add stuff to cards
     movieCard.appendChild(movieTitle);
     movieCard.appendChild(imDbRating);
     movieCard.appendChild(moviePoster);
     resultsElement.appendChild(movieCard);
 }

//  function toggle(checkAll) {
//     var boxes = document.querySelectorAll('input[type="checkbox"]');
//     for (var i = 0; i < boxes.length; i++) {
//         if (boxes[i] != checkAll)
//             boxes[i].checked = checkAll.checked;
//     }
// }

function getChecked() {
    // get checked genres
    let genres = [];
        let genreSearch = document.getElementById("genreSearch");
        let checks = genreSearch.getElementsByTagName("input");
        for (var i = 0; i < checks.length; i++) {
            if (checks[i].checked) {
                genres.push(checks[i].value);
            }
        };
        return genres;
    } 

function fetchResults() {
    // set up URL search params
    // let startDate = document.querySelector('.startDate').value;
    // let endDate = document.querySelector('.endDate').value;

    let url = new URL(baseURL + '/' + APIKey);
//    url.searchParams.set('release_date', startDate + ',' + endDate);
    url.searchParams.set( 'title_type', "feature")
    url.searchParams.set('genres', getChecked())
    url.searchParams.set('countries', 'us')
    url.searchParams.set('count', '100' )
    url.searchParams.set('sort', 'user_rating,asc')
    
    let decoded = decodeURIComponent(url)
    // alert(decoded)
    fetch(decoded)
    
    .then(function(response) { return response.json(); })
    .then(function(json) {
        console.log(json.results);
        results.innerHTML = '';
        // clear previous results
        json.results.forEach( (res) => {
            let userRating = "User Rating:    "
            let movie = res.title;
            let rating = userRating + res.imDbRating;
            let poster = res.image;
        //    pull results from JSON
           movieData(movie, poster, rating);
        })
    });
}
