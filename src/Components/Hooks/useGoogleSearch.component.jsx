import {useState,useEffect} from 'react';
import {API_KEY,CONTEXT_KEY} from '../../API/keys';


const useGoogleSearch = (term) =>{
    const [data,setData] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
        fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}&lowRange=1&num=10`)
        .then(response => response.json())
        .then(result => {
            setData(result);
        });
    }
    fetchData();

    }, [term]);

    return{
        data
    }
}

export default useGoogleSearch;