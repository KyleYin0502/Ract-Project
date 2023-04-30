import React, { useEffect, useState } from "react";
import axios from "axios"; /* API */

export default function Product() {
  /*API連接node.js http://127.0.0.1:5000/product_list in Server.js*/
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/product_list")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  /*************************************************************************/

  return (
    <div>
      <ul>
        {React.Children.toArray(
          data.map((product) => (
            <ul>
              <li>{product.product_name}</li>
              <li>{product.product_price}</li>
            </ul>
          ))
        )}
      </ul>
    </div>
  );
}
