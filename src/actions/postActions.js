import {FETCH_IMAGE , NEW_QUOTE} from './types';

export const fetchImages =()=> dispatch => {
    let url = "https://source.unsplash.com/random?sig=" + Math.random()

        fetch(` '${url}'`)
        .then(image => dispatch({
            type: FETCH_IMAGE,
            payload: image
        }));
    
}


