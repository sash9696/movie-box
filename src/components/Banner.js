import React, {useEffect, useState} from 'react';
import './Banner.css';
import requests from '../requests/Requests';
import axios from '../requests/axios';

const scrollDown = () => {
    window.scroll(
        0, 
        300
      );

}

function Banner() {
    const [movie, setMovie] = useState([]);
    
    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData(){
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
            request.data.results[ Math.floor(Math.random() * request.data.results.length - 1)]
        );
    }

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n-1) + "..." : string ;
    }
    return (
        <div className='banner' style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
        }}> 
            <div className="banner_contents">
                <h1>{movie?.original_name}</h1>
                <div className="banner_buttons">
                    <button onClick={scrollDown}>Play</button>
                    <button onClick={scrollDown} >My List</button>
                </div>
                <h3>{truncate(movie?.overview,80)}</h3>
            </div>
            
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
