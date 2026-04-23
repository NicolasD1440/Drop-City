import { useState } from 'react';
import "../styles/NavStyle.css";

const BarraNavegacion = ({ categorias }) => { 
    const [menuAbierto, setMenuAbierto] = useState(false);
    return (
        <nav className="navbar-container">
            {/* Sección 1: Logo */}
            <div className="logo">Drop City</div>

            {/* Sección 2: Enlaces */}
            <ul className="nav-links">
               
                <li><a href="ref">Productos</a></li>

                <li className="dropdown-trigger"
                    onMouseEnter={() => setMenuAbierto(true)}
                    onMouseLeave={() => setMenuAbierto(false)}
                >
                    <a href="">Categorías</a>
                    {menuAbierto && (
                        <ul className="dropdown-menu">
                            {categorias.map((cat) => (
                                <li key={cat.id}>{cat.nombre}</li>
                            ))}
                        </ul>
                    )}
                </li>

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