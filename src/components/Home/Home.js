import React, { useEffect } from 'react';
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { APIKey} from "../../common/apis/MovieApiKey";
import { useDispatch } from 'react-redux';
import {fetchAsyncMovies ,fetchAsyncShows} from "../../features/movies/movieSlice"


const Home = () => {
    const movieText = "Harry";
    const dispatch  = useDispatch();
    useEffect(() => {
        dispatch(fetchAsyncMovies());
        dispatch(fetchAsyncShows());
     },[dispatch]);
    return (
        <div>
            <div className="banner-img">             
            </div>
            <MovieListing />
        </div>
        
    );
};

export default Home;