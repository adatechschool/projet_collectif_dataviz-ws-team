fetch("https://api.themoviedb.org/3/person/popular?api_key=c6428b9644056a3cae4a52a8996a6ecb&language=en-US&page=1")    
.then(reponse => reponse.json())                        //je convertis ma réponse en json
.then(reponse2 => { 
    const myJSON = reponse2;

        for (const x in myJSON.results) {        
            
            let total = document.createElement('div');
            total.className = "acteur";
            
            let photo = document.createElement('img');
            photo.className = "image";
            photo.src = "https://www.themoviedb.org/t/p/w235_and_h235_face" +  myJSON.results[x].profile_path;
            total.appendChild(photo);
            
            let name = document.createElement('div');
            name.className = "nom";
            name.innerText = myJSON.results[x].name;
            total.appendChild(name);        

            let id = myJSON.results[x].id;

            let link = document.createElement('a');
            link.className = "lien";
            link.href = `file:///C:/Users/kce00/OneDrive/Documents/CODE/Ada/projet%20collectif%20Will%20Smith/willSmith.html?id=${id}`;

            link.appendChild(total);
        
            document.body.appendChild(link);
            
        };

    })

    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=c6428b9644056a3cae4a52a8996a6ecb&language=en-US&page=1")    
.then(reponse => reponse.json())                        //je convertis ma réponse en json

.then(reponse2 => { 
    const myJSON2 = reponse2;
    console.log("myJson2", myJSON2)
    ul = document.createElement('ul');
    document.getElementById('myItemList').appendChild(ul);

        for (const x in myJSON2.results) {               //je vais chercher le nom de chaque acteur dans l'objet
            let li = document.createElement('li');
            
            let id = myJSON2.results[x].id;
            console.log("id2", id);

            let link = document.createElement('a');
            link.className = "linklist";
            link.href = `file:///C:/Users/kce00/OneDrive/Documents/CODE/Ada/projet%20collectif%20Will%20Smith/pageFilm.html?id=${id}`;
            link.innerHTML = myJSON2.results[x].original_title;
            li.appendChild(link);

            ul.appendChild(li);
        
        }

        
    })       

    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=c6428b9644056a3cae4a52a8996a6ecb&language=en-US&page=2")    
    .then(reponse => reponse.json())                        //je convertis ma réponse en json
    
    .then(reponse2 => { 
        const myJSON3 = reponse2;
        document.getElementById('myItemList').appendChild(ul);
    
        for (const x in myJSON3.results) {               //je vais chercher le nom de chaque acteur dans l'objet
            let li = document.createElement('li');
            li.className = "linklist";
            
            let id = myJSON3.results[x].id;

            let link = document.createElement('a');
            link.className = "linklist";
            link.href = `file:///C:/Users/kce00/OneDrive/Documents/CODE/Ada/projet%20collectif%20Will%20Smith/pageFilm.html?id=${id}`;
            link.innerHTML = myJSON3.results[x].original_title;
            li.appendChild(link);

            ul.appendChild(li);
        }
        })       


        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=c6428b9644056a3cae4a52a8996a6ecb&language=en-US&page=3")    
        .then(reponse => reponse.json())                        //je convertis ma réponse en json
        
        .then(reponse2 => { 
            const myJSON4 = reponse2;
            document.getElementById('myItemList').appendChild(ul);
        
            for (const x in myJSON4.results) {               //je vais chercher le nom de chaque acteur dans l'objet
                let li = document.createElement('li');
                li.className = "linklist";
                
                let id = myJSON4.results[x].id;

                let link = document.createElement('a');
                link.className = "linklist";
                link.href = `file:///C:/Users/kce00/OneDrive/Documents/CODE/Ada/projet%20collectif%20Will%20Smith/pageFilm.html?id=${id}`;
                link.innerHTML = myJSON4.results[x].original_title;
                li.appendChild(link);
    
                ul.appendChild(li);
                }
            })  

        /*function similarFilms(){
        
            var title = document.getElementById("myInput").value;
            console.log("title", title)
            document.getElementById("demo").innerHTML = "You wrote: " + title;
    
        }*/


//TIMER

let bodyEl = document.getElementsByTagName("body")[0];
let titleEl = document.getElementById("title");
let minuteurEl = document.getElementById("minuteur");
let messageEl = document.getElementById("message");
let joursEl = document.getElementById("j");
let heuresEl = document.getElementById("h");
let minutesEl = document.getElementById("m");
let secondesEl = document.getElementById("s");

// get UTC offset once
let now = new Date();
const dateOffsetInMinutes = now.getTimezoneOffset();

const unJourEnMs = 1000 * 60 * 60 * 24;
const uneHeureEnMs = 1000 * 60 * 60;
const uneMinuteEnMs = 1000 * 60;

// const newYear = Date.now() - (dateOffsetInMinutes * uneMinuteEnMs) + 2000;
const newEnd = new Date("Dec 14 2022");

const getCountdown = () => {
    let nowDate = Date.now();

    let tempsRestantEnMs =
        newEnd - nowDate + dateOffsetInMinutes * uneMinuteEnMs;

    console.log(tempsRestantEnMs);

    // jours
    let nbJours = Math.floor(tempsRestantEnMs / unJourEnMs);

    // heures
    let resteTempsSansJoursMs = tempsRestantEnMs - nbJours * unJourEnMs;
    let nbHeures = Math.floor(resteTempsSansJoursMs / uneHeureEnMs);

    // minutes
    let resteTempsSansHeuresMs =
        resteTempsSansJoursMs - nbHeures * uneHeureEnMs;
    let nbMinutes = Math.floor(resteTempsSansHeuresMs / uneMinuteEnMs);

    // secondes
    let resteTempsSansMinutesMs =
        resteTempsSansHeuresMs - nbMinutes * uneMinuteEnMs;
    let nbSecondes = Math.floor(resteTempsSansMinutesMs / 1000);

    joursEl.textContent = nbJours;
    heuresEl.textContent = nbHeures;
    minutesEl.textContent = nbMinutes;
    secondesEl.textContent = nbSecondes;

    if (tempsRestantEnMs <= 0) {
        joursEl.textContent = 19;
        heuresEl.textContent = 9;
        minutesEl.textContent = 33;
        secondesEl.textContent = 0;
        titleEl.innerHTML = "Avatar 2";
    }
};

let countDownInterval = setInterval(getCountdown, 1000);

// init
getCountdown();

