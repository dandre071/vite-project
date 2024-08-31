import supabase from "./config/supabaseClient";

const useFetch = () => {
  const [product, setProduct] = useState(null);
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
  console.log(product[1]["product_name"]);

  return <div>supabaseApi</div>;
};

export default useFetch;
