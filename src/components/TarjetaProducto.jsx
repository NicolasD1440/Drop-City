const TarjetaProducto = ({ producto }) => {
    return (
      <div className="container">
        <div className="tarjet">
            <img src={producto.Image} alt={producto.categoria} />
            <div className="tarjet-content">
                <h3>{producto.categoria}</h3>
                <h4>{producto.descripcion}</h4>
                <div className="pb">
                    <p>${producto.precio}</p>
                    <button onClick={() => agregarAlCarrito(producto)}>Agregar</button>
                </div>
            </div>
        </div>
      </div> 
    );
}

export default TarjetaProducto;