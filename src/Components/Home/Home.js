import React, { useEffect, useState } from 'react'
import Row from '../Row'
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
    const [Gens,setGen]=useState([])

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


 const fetchAllGenre= async()=>{
    const {data:{genres}} = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
 //    console.log(results);
    setGen(genres)
    console.log(genres);
 }
 fetchAllGenre()
    fetchUpcoming()
    fetchTopRated()
    fetchPopular()
    fetchNowPlaying() 

    },[])


  return (
    <>
      <section className='home'>

    <div className="banner" style={{
        // {`${imgUrl}/${popularMovies[1].poster_path}`}
        backgroundImage: popularMovies[11]? `url(${`${imgUrl}/${popularMovies[11].poster_path}`})` : "black"
    }}>
        {/* <img src={`${imgUrl}/${popularMovies[1].poster_path}`}/> */}
        {/* <h2>
            {popularMovies[3].original_title}
        </h2>
        <p>{popularMovies[3].overview}</p> */}
        
        {popularMovies[11] &&  <h1>
            {popularMovies[11].original_title}
        </h1>}

        {popularMovies[11] &&  <p>{popularMovies[11].overview}</p> }
    </div>

    <Row title={"Upcoming"} arr={upcomingMovies}/>
    <Row title={"Now Streaming"} arr={nowPlayingMovies}/>
    <Row title={"Popular"}arr={popularMovies} />
    <Row title={"Top Rated"} arr={topRatedMovies} />
    {/* <Row title={"My List"} arr={Gen} /> */}

    <div className="genreBox">

{Gens.map((item)=>(
    <Link key={item.id} to={`/genre/${item.id}`} >{item.name}</Link>
))}

    </div>

      </section>
    </>
  )
}

export default Home
