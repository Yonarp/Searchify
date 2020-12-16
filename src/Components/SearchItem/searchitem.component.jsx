import React from 'react';
import './searchitem.styles.scss';

const SearchItem = ({item}) => {
   /*  let thumbnailSrc = '';
    const thumbnail = item?.pagemap?.cse_thumbnail;
    if(thumbnail?.length){
        thumbnailSrc = thumbnail[0]?.src;    
    } */

    return(
        <div className="item">
            <div className="item-content">
           <a href= {item.link} className='item-link-1'> <h1 className='item-title'>{item.title}</h1> </a>
            <a href = {item.link} className='item-link-2' >{item.displayLink}</a>
            <p className='item-description'>{item.snippet}</p>
            </div>
            {item.pagemap?.cse_image?(
             <div className="item-image">
                   {/*  <img src={item.pagemap.cse_image[0].src} alt='thumbnail'/> */}
                        <div className="item-image-container" style={{ backgroundImage: `linear-gradient(to top,rgba(0,0,0,0.3),rgba(0,0,0,0.2
                            )) , url(${item.pagemap.cse_image[0].src} ) `,}}></div>
             </div>
            ) : null }
        </div>
    )
}

export default SearchItem;