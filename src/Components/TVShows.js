import React, { useEffect, useState } from 'react'
// import "./Home.scss"
import Row from './Row';
import {  Link} from "react-router-dom";
import axios from "axios"

const imgUrl = "https://image.tmdb.org/t/p/original"
const apiKey = "176f03f3a0d236edefd9ac4a0fe8029b"
const url = "https://api.themoviedb.org/3/movie"
const upcoming="upcoming"
const nowPlaying = "now_playing"
const popular = "popular"
const topRated = "top_rated"


const Home = () => {

    const [upcomingMovies,setUpcomingMovies]=useState([])
    const [nowPlayingMovies,setNowPlayingMovies]=useState([])
    const [popularMovies,setPopularMovies]=useState([])
    const [topRatedMovies,setTopRatedMovies]=useState([])


    useEffect(()=>{

const fetchNowPlaying = async()=>{
   const {data:{results}} = await axios.get(`${url}/${nowPlaying}?api_key=${apiKey}`)
//    console.log(results);
   setNowPlayingMovies(results)
}


const fetchPopular = async()=>{
    const {data:{results}} = await axios.get(`${url}/${popular}?api_key=${apiKey}`)
 //    console.log(results);
    setPopularMovies(results)
 }

 const fetchTopRated = async()=>{
    const {data:{results}} = await axios.get(`${url}/${topRated}?api_key=${apiKey}`)
 //    console.log(results);
    setTopRatedMovies(results)
 }

 const fetchUpcoming = async()=>{
    const {data:{results}} = await axios.get(`${url}/${upcoming}?api_key=${apiKey}`)
 //    console.log(results);
    setUpcomingMovies(results)
 }




    fetchUpcoming()
    fetchTopRated()
    fetchPopular()
    fetchNowPlaying() 

    },[])


  return (
    <>
      <section className='home'>


       

    <Row title={"Upcoming"} arr={upcomingMovies}/>
    <Row title={"Now Streaming"} arr={nowPlayingMovies}/>
    <Row title={"Popular"}arr={popularMovies} />
    <Row title={"Top Rated"} arr={topRatedMovies} />
    {/* <Row title={"My List"} arr={Gen} /> */}

    
    

      </section>
    </>
  )
}

export default Home
