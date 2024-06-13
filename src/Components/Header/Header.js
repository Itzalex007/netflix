import React from 'react'
import logo from "../../logo.png"
import {Link} from "react-router-dom";
import {  ImSearch} from "react-icons/im";
import min from "../../min.jpeg"

const Header = () => {
    
    // console.log(logo);
  return (
    <>
<nav className="header">
<img src={logo} alt="" />

<div>
<Link to="/">Home</Link>
<Link to="/tvshow">TV-Show</Link>
<Link to="/Recently">Recently Added</Link>
<Link to="/">My List</Link>

</div>
<span className='my'> <img src={min} alt=""/> </span>

<ImSearch/>
</nav>

    </>
  )
}

export default Header
