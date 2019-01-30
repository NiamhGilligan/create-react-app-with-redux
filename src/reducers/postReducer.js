import {FETCH_IMAGE , NEW_QUOTE} from '../actions/types';

const initialState ={
    image:[],
    quote:{}
}

export default function(state = initialState , action){
    switch(action.type) {
        case FETCH_IMAGE: 
        console.log(JSON.stringify(action.payload) + "payload  IMAGE" )
        return{
            ...state,
            image:action.payload
        }
        case NEW_QUOTE:
        console.log(JSON.stringify(action  ) + "payload  quote" )
        return{
            ...state,
            quote:action.payload
        }
        default : 
        return state;
    }
}