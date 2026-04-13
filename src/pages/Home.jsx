import { productos } from "../services/productos";
import TarjetaProducto from "../components/TarjetaProducto";
import "../Styles/Home.css"

const Home =() => {
 return (
    <div>
        <h1>Drop City</h1>
        <div className="General">
          {productos.map((producto)=>(
            <TarjetaProducto key={producto.id} producto={producto}/>
          ))}   
        </div>
    </div>
 );
};

export default Home;