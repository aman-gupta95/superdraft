// import { PUSH_WEATHER, REQUEST_WEATHER, RECEIVE_WEATHER } from './../actions/weather';
import { SET_CHARACTERS_LIST, GET_CHARACTERS_LIST, ADD_CHARACTER_TO_FORM, SET_FILTER_STRING } from '../actions/character';

const initialState = {
    characters: {
        results: []
    },
    lineup:[],
    filterString: '',
};

/**
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHARACTERS_LIST:
            return {
                ...state,
                characters: action.data
            };
        case GET_CHARACTERS_LIST:
            return {
                ...state
            };
        case ADD_CHARACTER_TO_FORM:
            return {
                ...state,
                lineup: [...state.lineup, action.data]
            }
        case SET_FILTER_STRING:
            return {
                ...state,
                filterString: action.data
            }
        default:
            return state;
    }
}

export default characterReducer;