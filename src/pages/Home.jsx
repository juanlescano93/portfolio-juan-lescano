import React from "react";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Header from "../components/Header";

const Home = () => {
  //solo Codigo JS
  const alumno = {
    nombre: "Juan",
    apellido: "Lescano",
    edad: 31,
    lenguaje:["js","c#","java"],
    
  };

  return (
    //Principalmente Jsx (Html + JS)
    <>
      <Header alumno={alumno}/>
      <Main alumno={alumno}/>
      <Footer />
    </>
  );
};

export default Home;
