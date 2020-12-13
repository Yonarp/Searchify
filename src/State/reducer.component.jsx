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

        default: return state;
    }
}