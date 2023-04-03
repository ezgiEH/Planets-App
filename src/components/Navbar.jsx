import React, { useState } from 'react'
import data from '../data.json'
import { Link } from 'react-router-dom'
import HmbrgIcon from '../icon-hamburger.svg'
import Chevron from '../icon-chevron.svg'


const Navbar = () => {
  const [open, setOpen] = useState("none")

  return (
    <div className='navbar'>
      <button className='mobile-menu-icon' onClick={() => setOpen("flex")}><img src={HmbrgIcon} alt='mobile-icon'></img></button>
      <div className='mobile-menu' style={{ display: `${open}` }}>
        <div className='mobile-menu-header'>
          <Link to="/" ><h2>THE PLANETS</h2></Link>
          <button className='mobile-menu-close-icon' onClick={() => setOpen("none")}><img src={HmbrgIcon} alt='mobile-icon'></img></button>
        </div>
        {data.map((item) => {
          return <Link to={`/${item.id}`} key={item.id} className={`${item.color}`} onClick={() => setOpen("none")}>
            <div className='menu-planets'>
              <div className='circle'></div>
              {item.name}
            </div>
            <img src={Chevron} alt='Chevron'></img>
          </Link>
        })}
      </div>
      <Link to="/" className='logo'><h2>THE PLANETS</h2></Link>
      <div className='planets-menu'>
        {data.map((item) => {
          return <Link to={`/${item.id}`} key={item.id} className={`${item.color}`}>{item.name}</Link>
        })}
      </div>

    </div>
  )
}

export default Navbar