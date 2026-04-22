import "../styles/NavStyle.css";


const BarraNavegacion = () => { 
    return (
        <nav className="navbar-container">
            {/* Sección 1: Logo */}
            <div className="logo">Drop City</div>

            {/* Sección 2: Enlaces */}
            <ul className="nav-links">
               
                <li><a href="ref">Productos</a></li>
                <li><a href="">Categorías</a></li>
                <li><a href="">Destacados</a></li>
            </ul>

            {/* Sección 3: Acción */}
            <div className="nav-actions">
                <button className="btn-signup">Iniciar sesion</button>
            </div>
        </nav>
    );
}
export default BarraNavegacion;