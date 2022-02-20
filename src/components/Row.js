import React, {useEffect, useState} from 'react';
import axios from '../requests/axios';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';
import './Row.css';

function Row({title, fetchUrl, isLargeRow = false, search, setSearch}) {
    const [movie, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const base_url = "https://image.tmdb.org/t/p/original/";
     
    useEffect(() => {
            fetchData();
    }, [])
    
    async function fetchData(){
        const request = await axios.get(fetchUrl);
        setMovie(
            request.data.results
        );
    }
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    
      const handleClick = (movie) => {
            if(trailerUrl){
                setTrailerUrl('');
            }
            else{
                movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((error) => console.log(error));
            }

      }
    return (
        <div className='row'>
            <h1>{title}</h1>
            <div className="row_posters">
                {
                movie.filter(name => name?.title?.includes(search) || name?.name?.includes(search) || name?.original_name?.includes(search) || name?.overview?.includes(search)).map((movie) => (
                   movie?.poster_path && movie?.backdrop_path ? (
                       <img className={`row_poster ${isLargeRow && 'rowPoster_large'}`} 
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        src={`${base_url}${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`}
                        alt={movie?.name}
                       
                       />
                   ) : ''
               ))}
            </div>
            {trailerUrl && <YouTube
                videoId={trailerUrl}                  // defaults -> null
                opts={opts}   
            />}
        </div>
    )
}

export default Row
