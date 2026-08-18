import { useState } from 'react';

/**
 * Componente Reutilizable Producto
 * Aplica destructuring directo sobre el objeto props
 */
export default function Producto({ 
  id, 
  nombre, 
  precio, 
  categoria, 
  imagen, 
  destacado, 
  onAgregar 
}) {
  const [favorito, setFavorito] = useState(false);

  return (
    <article className={`product-card ${destacado ? 'featured' : ''}`}>
      {destacado && <span className="badge-featured">Destacado</span>}
      
      <button 
        className={`fav-btn ${favorito ? 'active' : ''}`}
        onClick={() => setFavorito(!favorito)}
        title="Marcar como favorito"
      >
        {favorito ? '❤️' : '🤍'}
      </button>

      <div className="image-container">
        <img src={imagen} alt={nombre} />
      </div>

      <div className="product-details">
        <span className="category-tag">{categoria}</span>
        <h3>{nombre}</h3>
        <p className="price">${precio.toLocaleString('es-CO')} USD</p>

        <button 
          className="add-cart-btn" 
          onClick={() => onAgregar({ id, nombre, precio })}
        >
          Agregar al Carrito
        </button>
      </div>
    </article>
  );
}