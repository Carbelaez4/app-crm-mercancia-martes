import './Home.css';
import {Outlet} from "react-router-dom";
import MenuLateral from './components/MenuLateral';

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
        <Outlet />
      </main>
    </div>
  </div>
  )
}

export default Home