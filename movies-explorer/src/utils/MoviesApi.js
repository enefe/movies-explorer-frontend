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
    
    getMovies() {
        return fetch(`${this._url}`, {
            method: "GET",
            headers: this._headers
        })
        .then(handleResponse)
    }
}

export const apiMovies = new Api({
    url: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-type': 'application/json',
        /* authorization: `Bearer ${localStorage.getItem('token')}` */
    }
}); 

/* https://api.nomoreparties.co/beatfilm-movies */




