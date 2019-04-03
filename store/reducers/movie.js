const defState = {
    movies: [],
    detailMovie: {},
    similar: []
}

export default function (state = defState, action) {
    const { type , data } = action
    
    switch (type) {
        case 'SET_MOVIES':
            return {...state, movies: state.movies.concat(data) }
        case 'SET_DETAIL_MOVIE':
            return {...state, detailMovie: data}
        case 'SET_SIMILAR':
            return {...state, similar: data}
        default:
            return state
    }
}
