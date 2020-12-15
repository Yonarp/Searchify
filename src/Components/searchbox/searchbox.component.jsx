import React, {useState} from 'react'
import {useHistory} from 'react-router-dom';
import {useStateValue} from '../../State/stateprovider.component';
import {actionTypes} from '../../State/reducer.component';
import './searchbox.styles.scss';

export function Searchbox({cssClassName}) {

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
     <div className='search-components'>
    <form onSubmit= {handleSubmit} className={cssClassName}>
        <div className="search-bar">
            <input className='search-bar-input' type='search' value={input} onChange={handleChange} placeholder='Search Or Type A URL'/>
        </div>
        <button className='search-button' type='submit'>Click on me to submit</button>
        <p>Find What You Are Looking For</p>
    </form>
    </div>
 )}