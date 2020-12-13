import React,{useReducer,createContext,useContext} from 'react'


export const StateContext = createContext();

export const StateProvider = ({reducer,initialState,children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);


export const useStateValue = () => {
     const [state,dispatch] = useContext(StateContext)
     return [state,dispatch];
}


