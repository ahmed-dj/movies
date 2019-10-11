// API/TMDBApi.js

const API_TOKEN = "e84dc3d6f3c27dfa10534ff5602f6309";

export const getFilmsFromApiWithSearchedText = (text, page) => {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page;
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error));
}

export const getImageFromApi = (name) => "https://image.tmdb.org/t/p/w300" + name;

// Récupération du détail d'un film
export const getFilmDetailFromApi = (idFilm) => {
  return fetch("https://api.themoviedb.org/3/movie/" + idFilm + "?api_key=" + API_TOKEN + "&language=fr")
    .then((response) => response.json())
    .catch((error) => console.error(error));
}
