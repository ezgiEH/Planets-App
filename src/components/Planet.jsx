import React, { useEffect, useState } from 'react'
import data from '../data.json'
import { useParams } from 'react-router-dom'

const Planet = () => {

  const { id } = useParams()
  const planet = data[id]

  const [content, setContent] = useState(planet.overview.content)
  const [source, setSource] = useState(planet.overview.source)
  const [image, setImage] = useState("")
  const [open, setOpen] = useState("flex")
  const [color, setColor] = useState("")

  const spin = `${planet.radius.split(",",1).join()%10}`

  useEffect(() =>{
    setImage(planet.images.planet)
    setOpen("none")
    setColor(planet.color)
  },id)

  return (
    <div className='planet-container'>
      <div className='planet-content'>
        <div className='planet-image'>
         <img src={image} alt={planet.name} className='main-image' style={{animationDuration: `${spin}0s`}}></img>
         <img src={planet.images.geology} className='geology' style={{display: `${open}`}} alt={planet.name}></img>
        </div>
        <div className='planet-main-info'>
          <div className='planet-description'>
            <h1>{planet.name}</h1>
            <p>{content}</p>
            <span>Source:<a href={source}>Wikipedia</a></span>
          </div>
          <div className='tabs-list'>
            <div className={`tabs ${color}`} onClick={() => 
              { 
                setContent(planet.overview.content); 
                setSource(planet.overview.source) 
                setImage(planet.images.planet)
                setOpen("none")
                }}><h3>01 overview</h3></div>
            <div className={`tabs ${color}`} onClick={() => 
              { 
                setContent(planet.structure.content); 
                setSource(planet.structure.source) 
                setImage(planet.images.internal)
                setOpen("none")
                }}><h3>02 structure</h3></div>
            <div className={`tabs ${color}`} onClick={() => 
              { 
                setContent(planet.geology.content); 
                setSource(planet.geology.source) 
                setImage(planet.images.planet) 
                setOpen("flex")
                }}><h3>03 geology</h3></div>
          </div>
        </div>
      </div>
      <div className='planet-general-info'>
        <div className='info-box'>
          <p>rotation time</p>
          <h2>{planet.rotation}</h2>
        </div>
        <div className='info-box'>
          <p>revolution time</p>
          <h2>{planet.revolution}</h2>
        </div>
        <div className='info-box'>
          <p>radius</p>
          <h2>{planet.radius}</h2>
        </div>
        <div className='info-box'>
          <p>avarge temperature</p>
          <h2>{planet.temperature}</h2>
        </div>
      </div>
    </div>
  )
}

export default Planet