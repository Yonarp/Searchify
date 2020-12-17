import {useState,useEffect} from 'react';
import {API_KEY,CONTEXT_KEY} from '../../API/keys';
import response from '../../API/response';

const useGoogleSearch = (term,offset) =>{
    const [data,setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
        console.log(offset);
        fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}&lowRange=${offset}&num=10`)
        .then(response => response.json())
        .then(result => {
            console.log('RESPONSE TITLES', result?.items?.map(news => news.title));
        });

    }
    setData(response);
    // fetchData();

    }, [term,offset]);

    return{
        data
    }
}

export default useGoogleSearch;