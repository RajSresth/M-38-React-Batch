/**
 * 1. initialState = 
 * 2. reducer function =
 *         i) state (reducer function parameter)
 *         ii) action = (reducer function parameter)
 *            - type = string value
 *            - payload(optional) =
 * 4. dispatch function
 * 5. state variable (useReducer)
 */


// 1. initial state
export const initialState = {
    count: 0,
}


//2. Reducer Function
export const reducer = (state,action) => {
    
    switch(action.type)
    {
        case "INCREMENT":
            return {count : state.count + action.payload}
            break;
        
        case "DECREMENT":
         return {count: state.count === 0? state.count: state.count - 1}
         break;

         case "RESET":
            return {count: 0}
            break;
        
            default:
             return state;
             break;
    }
}
