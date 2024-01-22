import { useState, useEffect } from "react";
const DataDisplay = () => {
  const [data, setData] = useState([]);
  //it is used to fetch the data from the dataBase
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:9797/");
        const data1 = await response.json();
        setData(data1);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [data]);
  return (
    <div className="data">
      <h1>Students</h1>
      <ul>
        {data.length > 0 ? (
          data.map((item) => (
            <li key={item._id}>
              Name: {item.name}, Age: {item.age}, Gender: {item.gender}
            </li>
          ))
        ) : (
          <li>No data available</li>
        )}
      </ul>
    </div>
  );
};
export default DataDisplay;
