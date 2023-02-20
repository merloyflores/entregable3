import React from 'react'
import "./styles/ResidentForm.css"

const ResidentForm = ({handleSubmit}) => {
  return (
    <section className='residentForm'>
      <div className='residentForm__img'>
      <img src="./src/images/Imagen11.png" alt="" />
      </div>
      <form className='residentForm__form' onSubmit={handleSubmit}>
          <input type="text" id='idLocation' placeholder='type a location id'/>
          <button>Search</button>
      </form>
    </section>
  )
}

export default ResidentForm
