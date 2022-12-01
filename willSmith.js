let params = (new URL(document.location)).searchParams;         //je récup l'adresse courante et retourne un objet avec mes paramètres
console.log("params", params)                                  
var id = params.get("id");                                      //je récupère juste mon paramètre id contenu dans mon adresse
console.log("id", id);



fetch(`https://api.themoviedb.org/3/person/${id}?api_key=c6428b9644056a3cae4a52a8996a6ecb&language=en-US`)    
.then(reponse => reponse.json())                        //je convertis ma réponse en json (objet js interprétable par le nav)
.then(reponse2 => {                             

let name = reponse2.name;
let birth = [];
birth.push(reponse2.birthday);
birth.push(reponse2.place_of_birth);
let bio = reponse2.biography;
let image = reponse2.profile_path;


console.log(reponse2)
document.getElementById("birth").innerHTML = birth;
document.getElementById("name").innerHTML = name;
document.getElementById("bio").innerHTML = bio;
document.getElementById("image").src = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + image;
})
