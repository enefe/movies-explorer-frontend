const handleResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }
    
    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            method: "GET",
            headers: this._headers
        })
        .then(handleResponse)
    }

    setUserInfo(newUser) {
        return fetch(`${this._url}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: newUser.name,
                email: newUser.email
            })
        })
        .then(handleResponse)
    }

    getMovies() {
        return fetch(`${this._url}/movies`, {
            method: "GET",
            headers: this._headers
        })
        .then(handleResponse)
    }

    addMovie(movie) {
        return fetch(`${this._url}/movies`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                country: movie.country || 'Нет страны',
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: `https://api.nomoreparties.co${movie.image.url}` || 'Картинка не найдена',
                trailer: movie.trailerLink || 'https://www.youtube.com',
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
                thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}` || 'Картинка не найдена',
                movieId: movie.id,
                _id: movie._id
            })
        })
        .then(handleResponse)
    }

    deleteMovie(movie) {
        /* debugger; */
        return fetch(`${this._url}/movies/${/* movie.movieId ||  */movie._id}`, {
            method: "DELETE",
            headers: this._headers
        })
        .then(handleResponse)
    }
}

export const api = new Api({
    url: 'https://api.enefe-diploma.nomoredomains.club',
    headers: {
        'Content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`
    }
});