import React from 'react'
import "./styles/LocationInfo.css";

const LocationInfo = ({location}) => {
  return (
      <section className='locationInfo'>
        <ul className='locationInfo__list'>
          <li className='locationInfo__item'><span>Name:</span> <br /> {location?.name}</li> 
          <li className='locationInfo__item'><span>Type:</span> <br /> {location?.type}</li> 
          <li className='locationInfo__item'><span>Dimension:</span> <br /> {location?.dimension}</li>
          <li className='locationInfo__item'><span>Population:</span> <br /> {location?.residents.length}</li>
        </ul>
    </section>
  )
}

export default LocationInfo