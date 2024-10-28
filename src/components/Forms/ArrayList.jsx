import React from "react";

const ArrayList = () => {
  const [jobList, setJobList] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/impresosDB/registro")
      .then((res) => res.json())
      .then((data) => {
        setJobList(data);
        console.log(data.map((x) => x.id));
      });
  }, []);
  return <div>{jobList && console.log(jobList)}</div>;
};

export default ArrayList;
