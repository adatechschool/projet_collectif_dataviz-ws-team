fetch("https://api.themoviedb.org/3/person/popular?api_key=c6428b9644056a3cae4a52a8996a6ecb&language=en-US&page=1")    
.then(reponse => reponse.json())                        //je convertis ma réponse en json
.then(reponse2 => { 
    const myJSON = reponse2;
console.log("myJson", myJSON)

        for (const x in myJSON.results) {        
            let total = document.createElement('div');
            total.className = "acteur";
            
            let photo = document.createElement('img');
            photo.src = "https://www.themoviedb.org/t/p/w235_and_h235_face" +  myJSON.results[x].profile_path;
            console.log("photo", photo.src)
            total.appendChild(photo);
            
            let name = document.createElement('div');
            name.className = "nom";
            name.innerText = myJSON.results[x].name;
            console.log("name", name.innerText)
            total.appendChild(name);
        

            document.body.appendChild(total);
            
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
            ul.appendChild(li);
        
            li.innerHTML += myJSON2.results[x].original_title;
        };
    })       


    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=c6428b9644056a3cae4a52a8996a6ecb&language=en-US&page=2")    
    .then(reponse => reponse.json())                        //je convertis ma réponse en json
    
    .then(reponse2 => { 
        const myJSON3 = reponse2;
    console.log("myJson3", myJSON3)
        document.getElementById('myItemList').appendChild(ul);
    
            for (const x in myJSON3.results) {               //je vais chercher le nom de chaque acteur dans l'objet
                let li = document.createElement('li');
                ul.appendChild(li);
            
                li.innerHTML += myJSON3.results[x].original_title;
            };
        })       


        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=c6428b9644056a3cae4a52a8996a6ecb&language=en-US&page=2")    
        .then(reponse => reponse.json())                        //je convertis ma réponse en json
        
        .then(reponse2 => { 
            const myJSON4 = reponse2;
        console.log("myJson4", myJSON4)
            document.getElementById('myItemList').appendChild(ul);
        
                for (const x in myJSON4.results) {               //je vais chercher le nom de chaque acteur dans l'objet
                    let li = document.createElement('li');
                    ul.appendChild(li);
                
                    li.innerHTML += myJSON4.results[x].original_title;
                };
            })  


    


    
    /*var pageWeb = list2;
    console.log("lien", pageWeb.link('file:///C:/Users/kce00/OneDrive/Documents/CODE/Ada/projet%20collectif%20Will%20Smith/willSmith.html'))
    document.getElementById("liste2").innerHTML = pageWeb.link('file:///C:/Users/kce00/OneDrive/Documents/CODE/Ada/projet%20collectif%20Will%20Smith/willSmith.html');*/


//document.getElementById("liste2").innerHTML = list2;

/*.then(reponse2 => { 
    const myJSON = reponse2;
//console.log("myJson", myJSON)
    ul = document.createElement('ul');
    document.getElementById('myItemList').appendChild(ul);

        for (const x in myJSON.results) {               //je vais chercher le nom de chaque acteur dans l'objet
            let li = document.createElement('li');
            ul.appendChild(li);
        
            li.innerHTML += myJSON.results[x].name;
        };
    })       
*/

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