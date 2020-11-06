import request from 'superagent';

const URL = process.env.REACT_APP_API_URL || 'https://warm-brushlands-73236.herokuapp.com/';

export async function fetchMovies() {
    try {
        const response = await request.get(`${URL}movies`);

        return response.body;
    } catch(err) {
        throw err;
    }
}

export async function fetchMovie(someId) {
    try {
        const response = await request.get(`${URL}movies/${someId}`);

        return response.body;
    } catch(err) {
        throw err;
    }
}

export async function fetchDirectors() {
    try {
        const response = await request.get(`${URL}directors`);

        return response.body;
    } catch(err) {
        throw err;
    }
}

export async function createMovie(newMovie) {
    try {
        await request
        .post(`${URL}movies`)
        .send(newMovie);

        return;
    } catch(err) {
        throw err;
    }
}

export async function updateMovie(someId, newMovie) {
    try {
        await request
        .put(`${URL}movies/${someId}`)
        .send(newMovie);

        return;
    } catch(err) {
        throw err;
    }
}

export async function deleteMovie(someId) {
    try {
        await request.delete(`${URL}movies/${someId}`);

        return;
    } catch(err) {
        throw err;
    }
}