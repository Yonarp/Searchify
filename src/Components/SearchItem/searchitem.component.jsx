import React from 'react';


const SearchItem = ({item}) => {
   /*  let thumbnailSrc = '';
    const thumbnail = item?.pagemap?.cse_thumbnail;
    if(thumbnail?.length){
        thumbnailSrc = thumbnail[0]?.src;    
    } */

    return(
        <div className="item">
            <a href = {item.link} >{item.displayLink}</a>
            <p>{item.snippet}</p>
            {item.pagemap?.cse_image?(
                <div className="image">
                    <img src={item.pagemap.cse_image[0].src} alt='thumbnail'/>
                </div>
            ) : <div className="image"></div> }
        </div>
    )
}

export default SearchItem;