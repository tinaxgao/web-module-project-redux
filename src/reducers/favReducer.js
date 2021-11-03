import { TOGGLE_FAV, ADD_FAV, DELETE_FAV } from "../actions/favActions.js";

const initialState = {
  favorites: [],
  displayFavorites: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAV:
      return { ...state, displayFavorites: !state.displayFavorites };

    case ADD_FAV:
        if (!state.favorites.find(movie=>movie.id===action.payload.id)){
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        }
        return state;

    case DELETE_FAV:
        return {...state, favorites: state.favorites.filter(movie => (movie.id !== action.payload)) };

    default:
      return state;
  }
};

export default reducer;
