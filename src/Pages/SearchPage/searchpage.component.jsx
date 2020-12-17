import React from 'react';
import {Searchbox} from '../../Components/searchbox/searchbox.component';
import {Link} from 'react-router-dom';
import {useStateValue} from '../../State/stateprovider.component'
import {actionTypes} from '../../State/reducer.component';
import useGoogleSearch from '../../Components/Hooks/useGoogleSearch.component';
import SearchItem from '../../Components/SearchItem/searchitem.component';
import './searchpage.styles.scss';


const SearchPage = () => {
/* const [loading, setLoading] = useState(true); */
/* const [data, setData] = useState([]); */
// const [Page,setPage] = useState(1);
const [state,dispatch] = useStateValue();

const {data} = useGoogleSearch(state.term,state.offset);

    console.log('DATA', state, data);

   /*  async function getData() {
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
    } */

     function nextPage(){
        // setPage(page => (page + 10));
        // console.log('Page is ' , Page);
        dispatch({
            type: actionTypes.GO_NEXT_PAGE,
        })
    }

 return(
    <div className='search-page'>
        <Link to='/'className='search-page-link' ><h1 className='search-page-logo'>Searchify</h1></Link>
        <p className='search-page-para'>Results in {data?.searchInformation?.formattedSearchTime} seconds</p>
        <Searchbox reference={null} cssClassName='search-page-bar'/>
        <button onClick={nextPage}>Next Set of Searches</button>

        {data?.items?.map((item, idx) => {
            return(<SearchItem key={`search_item${item?.cacheId}_${idx}`} item={item} idx={idx}/>
            )
            })}
    </div>
 )
}

export default SearchPage;