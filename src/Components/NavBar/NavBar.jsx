import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar() {
  const links = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/" },
    { name: "Movies", link: "/" },
    { name: "News & Popular", link: "/" },
    { name: "My List", link: "/" },
    { name: "Browse by Languages", link: "/" },
  ]
  return (
    <div className='navbar'>
      <div>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix logo" />
        <ul className='links d-flex '>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>News & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
          {/* {
            links.map(({name,link})=>{
              return(
                <li key={name}><Link to={link}>{name}</Link></li>
                );
            })
          } */}
        </ul>
      </div>
      <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avatar" />
    </div>
  )
}

export default NavBar