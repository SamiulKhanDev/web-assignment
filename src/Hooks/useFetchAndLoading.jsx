import { useState, useEffect } from "react";
import { getProducts } from "../Http/api";
import { useStateValue } from "../State/StateProvider";

const useFetchAndLoading = () => {
  const [loading, setLoading] = useState(true);
  const [{}, dispatch] = useStateValue();
  // const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await getProducts();

      dispatch({ type: "SET_PRODUCTS", products: result.data.data });
      setLoading(false);
    })();
  }, []);
  return [loading];
};

export default useFetchAndLoading;
