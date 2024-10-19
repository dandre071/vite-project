import { useState, useEffect } from "react";

const useFetch = (url, object) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url, { object })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;
