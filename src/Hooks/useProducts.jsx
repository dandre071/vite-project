import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import { uppercasing } from "../components/utils/helpers";

const useProducts = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getProducts() {
      let { data, error } = await supabase.from("products").select("*");

      if (data != null) {
        setProduct(data);
      }
    }

    getProducts();
  }, []);
  const [price, setPrice] = useState(null);
  const db = product.map((x) => uppercasing(x["product_name"]));

  /* console.log(db); */
  let productPrice;
  const getProductPrice = async () => {
    let { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("product_name", formik.values.productName);
    setPrice(data[0].product_price);
    //console.log(data[0].product_price);
    console.log(productPrice);
  };
  const createProduct = async () => {};
  return { product, setProduct, getProductPrice, db };
};

export default useProducts;
