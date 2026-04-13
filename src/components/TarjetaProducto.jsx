const TarjetaProducto = ({ producto }) => {
    return (
        <div className="tarjet">
            <img src={producto.Image} alt={producto.nombre} />
            <div className="tarjet-content">
                <h3>{producto.nombre}</h3>
                <div className="pb">
                    <p>${producto.precio}</p>
                    <button onClick={() => agregarAlCarrito(producto)}>Agregar</button>
                </div>
            </div>
        </div>
    );
}

export default TarjetaProducto;