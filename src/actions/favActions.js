export const TOGGLE_FAV = "TOGGLE_FAV";
export const ADD_FAV = "ADD_FAV";
export const DELETE_FAV = "DELETE_FAV";

export const toggleFav = () => {
  return ({ type: TOGGLE_FAV });
};

export const addFav =(movie)=> {
    return({ type: ADD_FAV, payload: movie})
};

export const deleteFav = (movie) => {
    return({type: DELETE_FAV, payload: movie})
}