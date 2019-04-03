import axios from 'axios'
const API_KEY = 'd94b3ad2730dee34212c8f50fb87a861'

export function getMovies (page = 1) {
    return dispatch => {
        axios({
            method: 'get',
            url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=${page}`
        })
        .then(({ data }) => {
            dispatch({
                type: 'SET_MOVIES',
                data: data.results
            })
        })
        // .catch(err => {
        //     console.log(err)
        // })
    }
}

export function getDetail (id) {
    return dispatch => {
        dispatch({
            type: 'SET_DETAIL_MOVIE',
            data: {}
        })
        axios({
            method: 'get',
            url: `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
        })
        .then(({ data }) => {
            dispatch({
                type: 'SET_DETAIL_MOVIE',
                data
            })
        })
        // .catch(err => {
        //     console.log(err)
        // })
    }
}

export function getSimilar (id, page = 1) {
    return dispatch => {
        dispatch({
            type: 'SET_SIMILAR',
            data: []
        })
        axios({
            method: 'get',
            url: `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&page=${page}`
        })
        .then(({ data }) => {
            // console.log(data)
            dispatch({
                type: 'SET_SIMILAR',
                data: data.results
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}