const key = 'c27f7be547msh757b92517d0b434p18db8ajsn51de667d599a';

// get weather info
const getActor = async (actor) => {
    const base = 'https://imdb8.p.rapidapi.com/title/find?q=';
    let new_actor = encodeURIComponent(actor.trim());
    const response = await fetch(base + new_actor, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "x-rapidapi-key": key
        }
    });
    const data = await response.json();

    return data.results[0].knownFor[0].id.split("/")[2];
}

//get city info

const getRatings = async (rating) => {
    const base = 'https://imdb8.p.rapidapi.com/title/get-ratings?tconst='

    const response = await fetch(base + rating, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "x-rapidapi-key": "c27f7be547msh757b92517d0b434p18db8ajsn51de667d599a"
        }
    });
    const data = await response.json();
    const data_array = [data.title, data.year, data.rating, rating];
    return data_array
}

const getImage = async (img) => {
    const base = 'https://imdb8.p.rapidapi.com/title/get-images?limit=25&tconst='

    const response = await fetch(base + img[3], {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "x-rapidapi-key": "c27f7be547msh757b92517d0b434p18db8ajsn51de667d599a"
        }
    });
    const data = await response.json();
    return data.images[0].url;
}

/* getActor('Ryan Gosling')
    .then(data => {
        return getRatings(data)
    })
    .then(data => {
        return getImage(data);
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err));

    */