import { useEffect, useState } from "react";
import ShowData from "./ShowData";

const FetchData = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const url = "https://api.publicapis.org/entries";
    const fetchData = async () => {
      const response = await fetch(url);
      const responseData = await response.json();
      setData(responseData);
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <div>
      <h1>Result</h1>
      {data.entries ? <ShowData data={data} /> : <p>Loading...</p>}
    </div>
  );
};

export default FetchData;
