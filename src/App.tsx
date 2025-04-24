import Cart from "./components/Cart";
import Product from "./components/Product";

function App() {
  return (
    <>
      <div className="mainContent">
        <div className="card">
          <div className="cardTop"> 
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
            />
          </div>

          <div className="cardTitle">Our Products</div>

          <Product />
        </div>

        {/* cart */}
        <div className="card">
          <Cart />
        </div>
      </div>
    </>
  );
}

export default App;
