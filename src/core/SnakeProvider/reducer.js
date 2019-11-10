import {
    SET_FIRST_NAME,
    INCREMENT_NUMBER,
    DECREMENT_NUMBER
} from "./constants";

const reducer = (state, action) => {
    switch (action.type) {
        case SET_FIRST_NAME:
            return { ...state, firstName: action.payload };
        case INCREMENT_NUMBER:
            return {
                ...state,
                people: state.people.map(person => {
                    if (person.name === action.payload) {
                        person.number += 1;
                    }
                    return person;
                })
            };

        case DECREMENT_NUMBER:
            return { ...state, number: state.number - action.payload };
        default:
            return state;
    }
};
export default reducer;
