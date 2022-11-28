fetch("https://api.themoviedb.org/3/person/popular?api_key=c6428b9644056a3cae4a52a8996a6ecb&language=en-US&page=1")    
.then(reponse => reponse.json())                        //je convertis ma réponse en json
.then(reponse2 => { 
    const myJSON = reponse2;
console.log("myJson", myJSON)

        for (const x in myJSON.results) {               
            let total = document.createElement('div');
            
            let photo = document.createElement('img');
            photo.src = "https://www.themoviedb.org/t/p/w235_and_h235_face" +  myJSON.results[x].profile_path;
            console.log("photo", photo.src)
            total.appendChild(photo);
            
            let name = document.createElement('div');
            name.innerText = myJSON.results[x].name;
            console.log("name", name.innerText)
            total.appendChild(name);
            
            document.body.appendChild(total);
        };

    })
        
                                     
                                  
//document.getElementById("liste").innerHTML = list;
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