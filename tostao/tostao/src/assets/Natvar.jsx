import './style/natvar.css'
import logoTostao from '../../public/cropped-Tostao_logo.webp'
import hamburger from '../../public/download.png'
import { useState } from 'react';



let State = false
function Natvar() {
  const [stateHamburger, setStateHamburger] = useState("menuDesplegableLayer")
  
  const changeVisibilityHamburger = () => { 
    if (State === false) {
      setStateHamburger("menuDesplegableLayerShow")
      State = true;
    } else if (State === true) {
      setStateHamburger("menuDesplegableLayerHidden")
      State = false;
     }
  }

  return ( 
    <>
    <div className="natvarContainer">
      <div className="seccionContainer secOne">
        <img src={logoTostao} alt="logo" className='logo'/>
      </div>
      <div className="seccionContainer secTwo">
        <img src={hamburger} alt="image.png" className='hamburger' onClick={changeVisibilityHamburger}/>
      <a href="http://localhost:5173/" className="redirection" id="Inicio">Inicio</a>
      <a href="https://nosotros.tostao.com/productos-domicilios/" className="redirection" id="Menu">Menu</a>
      <a href="https://nosotros.tostao.com/category/al-dia/" className="redirection" id="Novedades">Novedades</a>
      <a href="https://nosotros.tostao.com/pqrs/" className="redirection" id="Contacto">Contacto</a>
      </div>
      </div>
      
      <div className={stateHamburger}>
        <div className="menuDesplegable">
          
          <a href="http://localhost:5173/" className="redirectionTwo" id="Inicio">Inicio</a>
          
          <a href="https://nosotros.tostao.com/productos-domicilios/" className="redirectionTwo" id="Menu">Menu</a>
          
          <a href="https://nosotros.tostao.com/category/al-dia/" className="redirectionTwo" id="Novedades">Novedades</a>
          
          <a href="https://nosotros.tostao.com/pqrs/" className="redirectionTwo" id="Contacto">Contacto</a>
          
        </div>
      </div>
    </>
   );
}

export default Natvar;