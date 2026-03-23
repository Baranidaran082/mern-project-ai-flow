import { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function Preview() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/get-data")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Online Store Preview</h2>

      {data.map((item, index) => (
        <div key={index} style={{
          marginBottom: "10px",
          padding: "10px",
          border: "1px solid #ccc"
        }}>
            
          <p><b>Prompt:</b> {item.prompt}</p>
          <p><b>Response:</b></p>
            <ReactMarkdown>{item.response}</ReactMarkdown>
        </div>
      ))}
    </div>
  );
}

export default Preview;