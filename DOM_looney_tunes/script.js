let soundBite = document.querySelector('#myAudio')

function playAudio() {
    soundBite.play();
}


let showsObj = {
    shows: [{
        name: 'The Bugs Bunny Show',
        img_src: 'https://4.bp.blogspot.com/_tnCtjxSJMRI/Sih5QWXUfCI/AAAAAAAAAcE/IEkiltcHpMc/w1200-h630-p-k-no-nu/BUGS+BUNNY+SHOW+DVD+COVER.jpg',
        desc: 'The Bugs Bunny Show is an American animated anthology television series hosted by Bugs Bunny that was mainly composed of Looney Tunes and Merrie Melodies cartoons released by Warner Bros. between 1948 and 1969. The show originally debuted as a primetime half-hour program on ABC in 1960, featuring three theatrical Looney Tunes cartoons with new linking sequences produced by the Warner Bros. Cartoons staff.'
    }, {
        name: 'The Porky Pig Show',
        img_src: 'https://vignette.wikia.nocookie.net/warner-bros-entertainment/images/8/8b/418.jpg/revision/latest/scale-to-width-down/340?cb=20200705095655',
        desc: 'The Porky Pig Show is an American television anthology series hosted by Porky Pig, that was composed of Looney Tunes and Merrie Melodies theatrical cartoons made between 1948 and 1964. The series aired on ABC from 1964 to 1967, with 26 half-hour episodes created.'
    }, {
        name: 'The Road Runner Show',
        img_src: 'https://vignette.wikia.nocookie.net/looneytunes/images/c/cf/TheRoadRunnerShow1.jpg/revision/latest?cb=20110211210536',
        desc: "The Road Runner Show is a 1966-1972 animated anthology series which compiled theatrical Wile E. Coyote and the Road Runner cartoons from the Looney Tunes and Merrie Melodies, which were produced by Warner Bros. Cartoons between 1949 and 1964. Several of the shorts, especially the ones produced from 1965 onward, were produced by DePatie–Freleng Enterprises after Warner Bros. closed their animation studio. DePatie–Freleng Enterprises provided the animation for the show's intro and closing credits."
    }, {
        name: 'Looney Tunes',
        img_src: 'https://is1-ssl.mzstatic.com/image/thumb/Video118/v4/3a/b9/e6/3ab9e6ee-1891-2221-45d3-37657aa6b51a/mzl.yfxtsvyo.jpg/268x0w.jpg',
        desc: 'Looney Tunes is an American animated comedy series produced by Warner Bros. from 1930 to 1969 during the golden age of American animation alongside its sister series Merrie Melodies. It is known for introducing Bugs Bunny, Daffy Duck, Porky Pig, Elmer Fudd, Tweety, Sylvester, Granny, Yosemite Sam, Foghorn Leghorn, Marvin the Martian, Pepé Le Pew, Speedy Gonzales, Tasmanian Devil, Road Runner, Wile E. Coyote, and many other cartoon characters. After Bugs Bunny became the breakout recurring star of Merrie Melodies, and Looney Tunes went to color in the early 1940s, the two series gradually lost their distinctions and shorts were assigned to each series more randomly.'
    }, {
        name: "Bugs 'n' Daffy",
        img_src: 'https://vignette.wikia.nocookie.net/cartoonnetwork/images/a/a1/Bugs_and_Daffy_logo.png/revision/latest/scale-to-width-down/340?cb=20180918225440',
        desc: "Bugs 'n' Daffy (formerly That's Warner Bros.!) is an animated anthology television series that aired on The WB from 1995 to 1998 as part of their Kids' WB weekday lineup. The series featured cartoons from Warner Bros.' library of Looney Tunes and Merrie Melodies shorts. A weekly companion series, The Daffy Duck Show aired on Saturday mornings from 1996 to 1997."
    }, {
        name: 'Taz-Mania',
        img_src: 'https://images-na.ssl-images-amazon.com/images/I/71l6SrtTjML._RI_.jpg',
        desc: "Taz-Mania is an American animated sitcom produced by Warner Bros. Animation from 1991 to 1995, broadcast in the United States on Fox. The show follows the adventures of the 'Looney Tunes' character Taz (the Tasmanian Devil) in the fictional land of Tazmania (based on Tasmania)."
    }, {
        name: 'The Sylvester & Tweety Mysteries',
        img_src: 'https://upload.wikimedia.org/wikipedia/en/d/df/The_Sylvester_and_Tweety_Mysteries.jpg',
        desc: "The Sylvester & Tweety Mysteries is an American animated television series produced by Warner Bros. Animation which aired from 1995 to 2000 on Kids' WB. The final episode, containing the segments 'The Tail End?' and 'This Is the End', never aired on Kids' WB, and remained unaired until December 13, 2002, when the show aired in reruns on Cartoon Network. 52 episodes were produced."
    }, {
        name: 'The Merrie Melodies Show',
        img_src: 'https://upload.wikimedia.org/wikipedia/en/6/63/Merrie_Melodies_Show.jpg',
        desc: 'The Merrie Melodies Show was an animated anthology television series released to syndication by Warner Bros. Television in 1972. Each half-hour episode featured three shorts from the Looney Tunes and Merrie Melodies library, primarily those produced after 1960 and featuring Speedy Gonzales, Sylvester and Daffy Duck.'
    }]
};


let row = document.querySelector('.row');

for(let i = 0; i < showsObj.shows.length; i++) {
    let card = document.createElement('div');
    card.className = 'card text-white bg-dark';
    card.style = 'width: 18rem; margin: 1em; height: 300px; padding: 3em; overflow: auto;'

    let img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = showsObj.shows[i].img_src;

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    
    let cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.innerText = showsObj.shows[i].name;

    let cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.innerText = showsObj.shows[i].desc;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    card.appendChild(img);
    card.appendChild(cardBody);
    row.appendChild(card);

}

// CHALLENGE: re-write the for loop that's creating our cards to use a forEach method instead of a for loop
