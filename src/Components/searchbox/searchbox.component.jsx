import React, {useState} from 'react'
import {useHistory} from 'react-router-dom';
import {useStateValue} from '../../State/stateprovider.component';
import {actionTypes} from '../../State/reducer.component';

export function Searchbox() {

 const [,dispatch] = useStateValue();
 const [input,setInput] = useState('')
 const history = useHistory();

 function handleChange(e){
    setInput(e.target.value);  
 }
function handleSubmit(e){
    e.preventDefault();
    if(input)
    {
        console.log(`You have searched for ${input}`);
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input,
        });
        history.push('/search')
        
    }
    else alert('please fill something in the text field');
}

 
 return(
    <form onSubmit= {handleSubmit}>
        <input type='search' value={input} onChange={handleChange}></input>
        <button type='submit'>Click on me to submit</button>
    </form>
 )}