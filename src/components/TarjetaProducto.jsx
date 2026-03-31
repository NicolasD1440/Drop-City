const TarjetaProducto = ({producto}) => {
    return (
        <div>
          <img src={producto.Image} alt={producto.nombre} width="150" />
          <h3>{producto.nombre}</h3>
          <p>${producto.precio}</p>
          <button>Agregar al carrito</button>
        </div>
    );
};
export default TarjetaProducto;