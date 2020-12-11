import React from 'react';
import {Searchbox} from '../../Components/searchbox/searchbox.component';
import {useStateValue} from '../../State/stateprovider.component';

const SearchPage = () => {
const [state] = useStateValue();
 return(   <div className="">
        <h1>This is the search Page about {state.term} </h1>
        <Searchbox/>
    </div>
 )
}

export default SearchPage;