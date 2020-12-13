export const initialState = {
    term: null,
    offset: 1
}

export const actionTypes = {
    SET_SEARCH_TERM: 'SET_SEARCH_TERM',
    GO_PREV_PAGE: 'GO_PREV_PAGE',
    GO_NEXT_PAGE: 'GO_NEXT_PAGE'
}

export const reducer = (state,action) => {
    console.log('reducer called',action);
    switch(action.type){
        case actionTypes.SET_SEARCH_TERM:
            return{
                ...state,
                term: action.term,
            };
        case actionTypes.GO_PREV_PAGE: 
        if(state.offset > 1)
        return{
            ...state,
            offset: state.offset - 10,
        }
         return state;

        case actionTypes.GO_NEXT_PAGE: 
         if(state.offset < 91)
         return{
             ...state,
             offset: state.offset + 10,
         }
          return state

        default: return state;
    }
}