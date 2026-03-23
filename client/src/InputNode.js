import { useState } from "react";
import { Handle, Position } from "reactflow";
import "./InputNode.css";

function InputNode({ data }) {
  const [text, setText] = useState("");

  return (
    <div  className="input-node">
      
      {/* OUTPUT handle */}
      <Handle type="source" position={Position.Bottom} />

      <div className="nodrag">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter prompt"
        />
        <button onClick={() => data.onRun(text)}>Run flow</button>
      </div>
    </div>
  );
}

export default InputNode;