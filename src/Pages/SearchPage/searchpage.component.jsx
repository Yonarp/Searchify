import React, {useEffect, useState} from 'react';
import {Searchbox} from '../../Components/searchbox/searchbox.component';
/* import useGoogleSearch from '../../Components/Hooks/useGoogleSearch.component'; */
import {getSearchData} from '../../API/mockApi';
import SearchItem from '../../Components/SearchItem/searchitem.component';
import './searchpage.styles.scss';

const SearchPage = () => {
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

 return(
    <div className='search-page'>
        <h1>Searchify</h1>
        <Searchbox reference={null} cssClassName='search-page-bar'/>
        <p>total searches {data?.searchInformation?.formattedTotalResults} in {data?.searchInformation?.formattedSearchTime} seconds</p>

        {data?.items?.map((item, idx) => {
            return(<SearchItem key={`search_item${item?.cacheId}_${idx}`} item={item}/>
            )
            })}
    </div>
 )
}

export default SearchPage;