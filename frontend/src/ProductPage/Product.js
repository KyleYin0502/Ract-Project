import React, { useEffect, useState } from "react";
import axios from "axios"; /* API */
import Button from "@mui/material/Button";
import "../ProductPage/Product.scss";

export default function Product() {
  /*API連接node.js http://localhost:3001/product_list in Server.js*/
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/product_list")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  /*************************************************************************/

  return (
    <>
      <div className="container">
        <div className="box-container">
          {React.Children.toArray(
            data.map((product) => (
              <div className="box">
                <img
                  // src={process.env.PUBLIC_URL + "/img/ProductPage" + product.image}
                  src={"../img/ProductPage/" + product.image}
                />
                <div className="product-name-price">
                  <h3>{product.product_name}</h3>
                  <p>${product.product_price}</p>
                </div>
                <Button variant="contained">Add to Card</Button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
