fetch("https://api.themoviedb.org/3/movie/882598/similar?api_key=c6428b9644056a3cae4a52a8996a6ecb&language=en-US&page=1")    //champ.value pour lier ce que rentre le user dans le input.
        .then(reponse => reponse.json())
        .then(data => {
            
            for (const x in data.results) {
            let photo = document.createElement('img');
            photo.src = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + data.results[x].poster_path;
            console.log("photo", photo.src)
            
            document.body.appendChild(photo);
            }
        })