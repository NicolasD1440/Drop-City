import { productos } from "../services/productos";
import TarjetaProducto from "../components/TarjetaProducto";
import BarraNavegacion from '../components/BarraNavegacion';

import "../styles/Home.css";


const Home =() => {
 return (
    <div>
        <BarraNavegacion />
        <div className="General">
          {productos.map((producto)=>(
            <TarjetaProducto key={producto.id} producto={producto}/>
          ))}   
        </div>
    </div>
 );
};

export default Home;