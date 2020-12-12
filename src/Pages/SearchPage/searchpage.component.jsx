import React, {useEffect, useState} from 'react';
import {Searchbox} from '../../Components/searchbox/searchbox.component';
import {useStateValue} from '../../State/stateprovider.component';
/* import useGoogleSearch from '../../Components/Hooks/useGoogleSearch.component'; */
import {getSearchData} from '../../API/mockApi';
import SearchItem from '../../Components/SearchItem/searchitem.component';


const SearchPage = () => {
const [state] = useStateValue();
const [loading, setLoading] = useState(true);
const [data, setData] = useState([]);

/* const {data} = useGoogleSearch(state.term); */
    async function getData() {
        setLoading(true);
        const response =  await getSearchData();
        setData(response);
        setLoading(false);
    }

    useEffect(()=> {
        getData();
    }, []);

    if(loading){
        return <h1>Loading</h1>
    }

 return(   <div>
        <h1>This is the search Page about {state.term} </h1>
        <p>total searches {data?.searchInformation?.formattedTotalResults} in {data?.searchInformation?.formattedSearchTime} seconds</p>

        <Searchbox/>
        {data?.items?.map((item, idx) => 
            <SearchItem key={`search_item${item?.cacheId}_${idx}`} item={item}/>
        )}
    </div>
 )
}

export default SearchPage;