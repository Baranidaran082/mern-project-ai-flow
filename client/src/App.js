import { useState } from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import axios from "axios";
import "./App.css";
import InputNode from "./InputNode";
import ResultNode from "./ResultNode";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preview from "./Preview";


function App() {
  const [result, setResult] = useState("");
  const [promptText, setPromptText] = useState("");

  const handleRun = async (text) => {
    setPromptText(text); //store prompt
    const res = await axios.post("http://localhost:5000/api/ask-ai", {
      prompt: text,
    });

    setResult(res.data.result);
  };



  const handleSave = async () => {
  await axios.post("http://localhost:5000/api/save", {
    prompt: promptText,
    response: result,
  });

  alert("Saved successfully!");
};



  const nodeTypes = {
    inputNode: InputNode,
    resultNode: ResultNode,
  };



 const nodes = [
  {
    id: "1",
    position: { x: 200, y: 100 },
    data: { onRun: handleRun },
    type: "inputNode",
  },
  {
    id: "2",
    position: { x: 100, y: 300 },
    data: { 
    result: result,
    onSave: handleSave 
    },
    type: "resultNode",
  },
];


const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: "smoothstep", 
    sourcePosition: "bottom",
  },
];

return (
  <BrowserRouter>
    <Routes>

      {/* Main Page */}
      <Route
        path="/"
        element={
          <div className="app-container">

            {/* Header */}
            <div className="app-header">
              <h1>MERN App</h1>

              <button
                className="preview-btn"
                onClick={() => window.open("/preview", "_blank")}
              >
                Open Preview
              </button>
            </div>

            {/* React Flow Area */}
            <div className="react-flow">
              <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                fitView
              />
            </div>

          </div>
        }
      />

      {/* Preview Page */}
      <Route path="/preview" element={<Preview />} />

    </Routes>
  </BrowserRouter>
);}

export default App;