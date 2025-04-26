import React from 'react'
import "../css/Card.css"

const Main = (props) => {
  
  const {nombre,apellido,edad,lenguaje:[a,b,c]}=props.alumno
  return (

    <div>
    
      
      <div className="card">
      <img 
        src="https://media.printler.com/media/photo/182985-1.jpg?rmode=crop&width=638&height=900" 
        alt="Imagen de ejemplo" 
        className="card-image"
      />
      <h2>Juan Lescano</h2>
      <p>Hola soy {nombre} tengo {edad} años estoy estudiando Programacion en la Facultad Regional Tucuman - Lenguajes {a} {b} {c} </p>
      <a target="_blank" href="https://www.youtube.com/shorts/BtaRrvEZtFo"><button className="card-button">ya llegaron las pishaaaz</button></a>
    </div>
    </div>
  )
}

export default Main