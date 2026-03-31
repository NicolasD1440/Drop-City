import { productos } from "../services/productos";
import TarjetaProducto from "../components/TarjetaProducto";

const Home =() => {
 return (
    <div>
        <h1>Drop City</h1>
        <div>
          {productos.map((producto)=>(
            <TarjetaProducto key={producto.id} producto={producto}/>
          ))}   
        </div>
    </div>
 );
};

export default Home;