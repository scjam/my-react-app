import request from 'superagent';

export async function fetchMovies() {
    try {
        const response = await request.get('https://warm-brushlands-73236.herokuapp.com/movies');

        return response.body;
    } catch(err) {
        throw err;
    }
}

export async function fetchMovie(someId) {
    try {
        const response = await request.get(`https://warm-brushlands-73236.herokuapp.com/movies/${someId}`);

        return response.body;
    } catch(err) {
        throw err;
    }
}

export async function fetchDirectors() {
    try {
        const response = await request.get('https://warm-brushlands-73236.herokuapp.com/directors');

        return response.body;
    } catch(err) {
        throw err;
    }
}

export async function createMovie(newMovie) {
    try {
        await request
        .post('https://warm-brushlands-73236.herokuapp.com/movies')
        .send(newMovie);

        return;
    } catch(err) {
        throw err;
    }
}

export async function updateMovie(someId, newMovie) {
    try {
        await request
        .put(`https://warm-brushlands-73236.herokuapp.com/movies/${someId}`)
        .send(newMovie);

        return;
    } catch(err) {
        throw err;
    }
}

export async function deleteMovie(someId) {
    try {
        await request.delete(`https://warm-brushlands-73236.herokuapp.com/movies/${someId}`);

        return;
    } catch(err) {
        throw err;
    }
}