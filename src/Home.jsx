import './Home.css';

import MenuLateral from './components/MenuLateral';
import Contenido from './components/Contenido';

const Home = () => {
  return (
    <div className="aplicacion">
    <MenuLateral />
    <div className="aplicacion__contenido">
      <div className="aplicacion__contenido-fondo"></div>
      <main className="aplicacion__principal">
        <section className="aplicacion__eslogan">
          <h2 className="aplicacion__eslogan-texto"><span>TrackX:</span> Logística inteligente, rastreo preciso.</h2>
        </section>
    
        <Contenido />
      </main>
    </div>
  </div>
  )
}

export default Home