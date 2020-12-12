import React from 'react';


const SearchItem = ({item}) => {
    let thumbnailSrc = '';
    const thumbnail = item?.pagemap?.cse_thumbnail;
    if(thumbnail?.length){
        thumbnailSrc = thumbnail[0]?.src;    
    }

    return(
        <div className="item">
            <a href = {item.link} >{item.displayLink}</a>
            <p>{item.snippet}</p>
            <img src={thumbnailSrc} alt='thumbnail'></img>
        </div>
    )
}

export default SearchItem;