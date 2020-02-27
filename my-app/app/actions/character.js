export const SET_CHARACTERS_LIST = 'SET_CHARACTERS_LIST';
export const GET_CHARACTERS_LIST = 'GET_CHARACTERS_LIST';
export const ADD_CHARACTER_TO_FORM = 'ADD_CHARACTER_TO_FORM';
export const SET_FILTER_STRING = 'SET_FILTER_STRING';
export const PUSH_WEATHER_LIST = 'PUSH_WEATHER_LIST';
export const REMOVE_WEATHER_FROM_LIST = 'REMOVE_WEATHER_FROM_LIST';
export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';

// /**
//  * @param {Object} weather
//  * @return {Object}
//  */
// export function setCharacters(characters) {
//     return {
//         type: SET_CHARACTERS_LIST,
//         characters
//     };
// }

/**
 * @return {Object}
 */
// export const getCharacters = () => (dispatch) => {
//     console.log('inside getchars');
//     return fetchAllCharacters()
//     .then(data => {
//         console.log(data);
//         dispatch({
//             type: SET_CHARACTERS_LIST,
//             data
//         });
//     });
// }

export const setCharacter = (data) => {
    return {
        type: 'SET_CHARACTERS_LIST',
        data
    };
}

export const addCharacterToForm = (data) => {
    return {
        type: 'ADD_CHARACTER_TO_FORM',
        data
    }
}

export const setFilterString = (data) => {
    return {
        type: 'SET_FILTER_STRING',
        data
    }
}

// export const getAllCharacters = (dispatch) => ({
//     getAllCharacters: () => {
//         return fetchAllCharacters().then(data => {
//             dispatch(setCharacter(data));
//         });
//     }
// });

/**
 * @return {Object}
 */
export function receiveWeather() {
    return {
        type: RECEIVE_WEATHER
    };
}

/**
 * @param {String} cityName
 * @return {Promise}
 */
export const fetchWeather = (cityName) => (dispatch) => {
    dispatch(requestWeather());

    return getWeatherData(cityName)
        .then((weather) => {
            dispatch(pushWeather(parseWeatherResponseForUI(weather)));
        })
        .finally(() => {
            dispatch(receiveWeather());
        });
};
