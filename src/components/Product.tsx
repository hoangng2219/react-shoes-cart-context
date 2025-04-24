import React, { useEffect, useState } from "react";
import Image from "./Image";
import Typography from "./Typography";
import { awaitTime } from "../utils/awaitTime";
import { data } from "../data";
import { IProduct } from "../types";
import { useAppContext } from "../contexts/AppContext";

const Product = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const {addCarts,carts}=useAppContext();

  useEffect(() => {
    async function fetchProducts() {
      await awaitTime(200);
      setProducts(data);
    }
    fetchProducts();
  }, []);

  const isProductInCart = (productId: number) => {
    return carts.some(item => item.id === productId);
  };
  return (
    <div className="cardBody">
      {products.map((product) => (
        <div className="shopItem" key={product.id}>
          <div
            className="shopItem_image"
            style={{ backgroundColor: product.color }}
          >
            <Image alt={product.name} src={product.image} />
          </div>
          <div className="shopItem_name">{product.name}</div>
          <Typography className="shopItem_description" component="p">
            {product.description}
          </Typography>
          <div className="shopItem_bottom">
            <div className="shopItem_price">${product.price}</div>
            {isProductInCart(product.id) ? (
              <div className="shopItem_button shopItem_button--disabled">
                <p>ADDED TO CART</p>
              </div>
            ) : (
              <div className="shopItem_button" onClick={() => addCarts(product)}>
                <p>ADD TO CART</p>
              </div>
            )}
          
          </div>
        </div>
      ))}
     
    </div>
  );
};

export default Product;
