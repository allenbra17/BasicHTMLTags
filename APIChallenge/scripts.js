

const baseURL = "https://imdb-api.com/API/AdvancedSearch";
const APIKey = "k_d0n70ap7";
let resultsElement = document.getElementById('results');
let buttonElement = document.getElementById('pickMovies');
let tableElement = document.getElementById('genreSearch');


buttonElement.addEventListener('click', (event) => {
    event.preventDefault();
    fetchResults();
    return false;
})

 function movieData(movie, poster, rating) {
     let movieTitle = document.createElement('p');
     let imDbRating = document.createElement('p');
     let moviePoster = document.createElement('img');

     movieTitle.innerText = movie;
     moviePoster.src = poster;
     imDbRating.innerText = rating;

     resultsElement.appendChild(movieTitle);
     resultsElement.appendChild(imDbRating);
     resultsElement.appendChild(moviePoster);
 }

 function getChecked() {
    //Create an Array.
    let genres = [];
        //Reference the Table.
        let genreSearch = document.getElementById("genreSearch");

        //Reference all the CheckBoxes in Table.
        let checks = genreSearch.getElementsByTagName("input");

        // Loop and push the checked CheckBox value in Array.
        for (var i = 0; i < checks.length; i++) {
            if (checks[i].checked) {
                genres.push(checks[i].value);
            }
        };
    } 
let genres = [];
    let genre = document.querySelector('.input').value;
    genres.push(genre)
    genres.join(',');
    alert(genres);
 

function toggle(checkAll) {
    var boxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < boxes.length; i++) {
        if (boxes[i] != checkAll)
            boxes[i].checked = checkAll.checked;
    }
}

function fetchResults() {
    // let startDate = document.querySelector('.startDate').value;
    // let endDate = document.querySelector('.endDate').value;

    var usp = new URLSearchParams();
    var checkedBoxes = genreSearch.querySelectorAll('input[type="checkbox"]:checked');
    
        var values = Array.from
        (checkedBoxes, cb=>cb.name).join(',');
        var genre = checkedBoxes.value;
        usp.append(genre,values);

    let url = new URL(baseURL + '/' + APIKey);
    // url.searchParams.set('release_date', startDate + ',' + endDate);
    url.searchParams.set( 'title_type', "feature")
    // url.searchParams.set( 'genres' , genres.values );
    url.searchParams.set( 'groups', "bottom_100")
    url.searchParams.set( 'count', 100 )
    fetch(url)
    .then(function(response) { return response.json(); })
    .then(function(json) {
        console.log(json.results);
        resultsElement.innerHTML = '';
        json.results.forEach( (res) => {
           let movie = res.title;
           let rating = res.imDbRating;
           let poster = res.image;
           movieData(movie, poster, rating);
        })
});
}
