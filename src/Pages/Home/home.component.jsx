import React,{useRef} from 'react';
import {Searchbox} from '../../Components/searchbox/searchbox.component';
import  animationData from '../../lottie/search_anim_2.json';
import Lottie from 'lottie-react';
import './home.styles.scss';

const Home = () => {
    const lottieRef  = useRef();

    const style = {
        height:200,
        width: 100,
        position: 'absolute',
        left:50,
        top:-5,

    }


    return(
    <div className="home">
    <div className="logo">
    <h1>Se&nbsp; rchify</h1>
    <Lottie lottieRef={lottieRef} animationData={animationData} style={style} loop={false} autoplay={false} />
    </div>
    <Searchbox cssClassName='search-form' reference={lottieRef}/>
    <h2>find what you are looking for</h2>
    </div>
    )

}

export default Home;