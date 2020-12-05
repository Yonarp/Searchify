import React, {useState} from 'react'
import {useHistory} from 'react-router-dom';


export const Searchbox = () => {
 
 const [input,setInput] = useState('')
 const history = useHistory();

 function handleChange(e){
    setInput(e.target.value);
 }
function handleSubmit(e){
    e.preventDefault();
    console.log(`You have searched for ${input}`)
    history.push('/search')
}

 
 return(
    <form onSubmit= {handleSubmit}>
        <input type='search' value={input} onChange={handleChange}></input>
        <button type='submit'>Click on me to submit</button>
    </form>
 )}