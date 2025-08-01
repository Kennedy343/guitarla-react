export default function Header({ cart, incrementQuantity, decrementQuantity, removeFromCart, clearCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img className="img-fluid" src="/img/logo.svg" alt="imagen logo" />
            </a>
          </div>

          <nav className="col-md-6 mt-5 d-flex align-items-start justify-content-end">
            <div className="carrito">
              <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" />
              <div id="carrito" className="bg-white p-3 shadow">
                {cart.length === 0 ? (
                  <p className="text-center">El carrito está vacío</p>
                ) : (
                  <>
                    <table className="w-100 table">
                      <thead>
                        <tr>
                          <th>Imagen</th>
                          <th>Nombre</th>
                          <th>Precio</th>
                          <th>Cantidad</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map(product => (
                          <tr key={product.id}>
                            <td>
                              <img className="img-fluid" src={`/img/${product.image}.jpg`} alt={product.name} />
                            </td>
                            <td>{product.name}</td>
                            <td className="fw-bold">${product.price}</td>
                            <td className="d-flex align-items-center gap-2">
                              <button type="button" className="btn btn-dark btn-sm" onClick={() => decrementQuantity(product.id)}>-</button>
                              {product.quantity}
                              <button type="button" className="btn btn-dark btn-sm" onClick={() => incrementQuantity(product.id)}>+</button>
                            </td>
                            <td>
                              <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(product.id)}>X</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <p className="text-end">Total pagar: <span className="fw-bold">${total}</span></p>
                    <button className="btn btn-dark w-100 mt-3 p-2" onClick={clearCart}>
                      Vaciar Carrito
                    </button>
                  </>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
