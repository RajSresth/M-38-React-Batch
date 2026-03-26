/**
 * 1 initialstate
 * 2 reducer function =
 *    i) - state (reducer function parameter)
 *    ii) -  action
 *       -  type = string value
 *       -  payload(optional)
 * 3 dispatch function
 * 4 state variable (useReducer)
 * 
 */

//1. Initial State
export const initialState = {  //ye state mai aata h state jo reducer ka parameter h
    count : 0
}
// action : { type : "INCREMENT", payload(optional)} aisa dikhta h ye action piche mai

//2. Reducer function 
export const reducer = (state, action) => {
    switch(action.type){
        case "INCREMENT":
            return {count: state.count + action.payload}
            break;

        case "DECREMENT":
            return {count: state.count === 0? state.count : state.count - 1}
            break;

        case "RESET":
            return {count: 0}
            break;
        
            default:
            return state;
            break;
    }
}