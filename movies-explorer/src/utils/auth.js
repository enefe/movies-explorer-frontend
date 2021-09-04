export const BASE_URL = 'https://api.enefe-diploma.nomoredomains.club';

const handleResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
} 

export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, password})
    })
    .then(handleResponse)
};

export const login = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({email, password})
    }) 
    .then(handleResponse) 
};

export const getContent = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      }
    })
    .then(handleResponse)
};