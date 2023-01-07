import React, { useEffect, useState } from 'react'
import './RowPost.css';
import axios from '../../axios';
import {imageUrl } from '../../Constants/constants'
import YouTube from 'react-youtube';
import { API_KEY } from '../../Constants/constants';

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [movieid, setMovieid] = useState('')
    useEffect(() => {
        axios.get(props.url).then((response) => {
            setMovies(response.data.results)
        }).catch((err) => {
        })
    }, [props]);

    // Youtube
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          automute: 1,
        },
      };
    const handleMovie = (id)=>{
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            if(response.data.length !==0){
                setMovieid(response.data.results[0])
            }else{
                console.log("Array is Empty");
            }
        })
    }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj) =>
                    <img onClick={()=>{
                        handleMovie(obj.id)
                    }} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="" />
                )}
            </div>
            { movieid && <YouTube videoId={movieid.key} opts={opts}/>}
        </div>
    )
}

export default RowPost