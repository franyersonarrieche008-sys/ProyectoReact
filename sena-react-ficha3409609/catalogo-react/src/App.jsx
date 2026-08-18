import { useState } from 'react';
import Producto from './components/Producto';
import { productosData } from './data/productos';
import './App.css';

export default function App() {
  // Estado para el término de búsqueda
  const [busqueda, setBusqueda] = useState('');
  const [carrito, setCarrito] = useState([]);

  // Filtrar productos por nombre o categoría
  const productosFiltrados = productosData.filter(producto =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    producto.categoria.toLowerCase().includes(busqueda.toLowerCase())
  );

  // Función para agregar productos al carrito (pasada como Prop)
  const agregarAlCarrito = (producto) => {
    setCarrito(prev => [...prev, producto]);
  };

  return (
    <div className="app-container">
      {/* Header de la Aplicación */}
      <header className="main-header">
        <h1>Catálogo de Hardware Tech</h1>
        <div className="cart-badge">
          🛒 Carrito: <span>{carrito.length}</span>
        </div>
      </header>

      {/* Buscador */}
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Buscar por producto o categoría..." 
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      {/* Grilla de Productos usando map() */}
      <section className="product-grid">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto) => (
            /* Pasamos cada propiedad como PROPS al componente hijo */
            <Producto 
              key={producto.id}
              id={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              categoria={producto.categoria}
              imagen={producto.imagen}
              destacado={producto.destacado}
              onAgregar={agregarAlCarrito}
            />
          ))
        ) : (
          <p className="no-results">No se encontraron productos.</p>
        )}
      </section>
    </div>
  );
}