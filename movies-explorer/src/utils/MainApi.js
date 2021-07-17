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

    addMovie(newMovie, jwt) {
        return fetch(`${this._url}/movie`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                movie: newMovie,
                jwt: jwt
              })
        })
        .then(handleResponse)
    }

    deleteMovie(movie) {
        return fetch(`${this._url}/movie/${movie.movieId}`, {
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