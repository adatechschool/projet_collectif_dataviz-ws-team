let params = (new URL(document.location)).searchParams;         //je récup l'adresse courante et retourne un objet avec mes paramètres
console.log("params", params)                                  
var id = params.get("id");                                      //je récupère juste mon paramètre id contenu dans mon adresse
console.log("id", id);


fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c6428b9644056a3cae4a52a8996a6ecb&language=en-US`)
.then(reponse => reponse.json())                        //je convertis ma réponse en json (objet js interprétable par le nav)
.then(reponse2 => {
let title = reponse2.original_title;
let image = reponse2.poster_path;
let date = reponse2.release_date;
let datt='Release Date :'+" "+ "<span class='text-date'>"+date+"</span>";
let overview = reponse2.overview;
let apercu= 'Overview :'+" "+"<span class='text-overview'>"+overview+"</span>";
let runtime = reponse2.runtime;
let Runruntime='Runtime :'+" "+"<span class='text-runtime'>"+runtime +" "+'min'+"</span>";
let slogan = reponse2.tagline;
let slg= 'Tagline :'+" "+"<span class='text-slogan'>"+ slogan+"</span>";
for (const x in reponse2.genres) {
    let types = document.createElement('div');
    types.className = "genres";
    types.innerText = reponse2.genres[x].name;
    console.log("types", types.innerText)
    document.body.appendChild(types);
    }
console.log(reponse2)
document.getElementById("titre").innerHTML = title;
document.getElementById("image").src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + image;
document.getElementById("dat").innerHTML = datt;
document.getElementById("overview").innerHTML = apercu;
document.getElementById("duree").innerHTML = Runruntime;
document.getElementById("slog").innerHTML = slg;
})