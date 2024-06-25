import './style/content.css'
import coffe from '../../public/TOSTAO-Convenio-Compensar.png'


function Content() {
  return ( 
    <div className="containerGeneral">

      <div className="layerFront">
      <div className="menu">
        <div className="arrows left">&lt;</div>
          <div className="center">
            <img src="" alt="" className='serch'/>
        </div>
        <div className="arrows right">&gt;</div>
      </div>
      </div>

      
      <div className="subContainer subOne">
        <div className="alingText">
        <h1 className='title'>Bienvenidos</h1>
        <p className='description'>Desde la apertura de la primera tienda hace casi 5 años, TOSTAO’ se ha comprometido con las poblaciones más vulnerables de la sociedad, priorizando en nuestra contratación a las madres cabeza de familia y personas mayores de 45 años, así como personas de primer empleo.</p>
        </div>
      </div>
      
      <div className="subContainer subTwo">
        <img src={coffe} alt="image.png" className='coffe'/>
      </div>
    </div>
   );
}

export default Content;