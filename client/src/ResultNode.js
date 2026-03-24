import { Handle, Position } from "reactflow";
import ReactMarkdown from "react-markdown";
import "./ResultNode.css";

function ResultNode({ data }) {
  return (
    <div className="result-node">
      {/* INPUT handle */}
      <Handle type="target" position={Position.Left} />
            <div
              className="result-box nowheel nodrag"  
              onWheel={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
              >
        <ReactMarkdown>{data.result}</ReactMarkdown>
      </div>


      <button onClick={data.onSave}>Save</button>
    </div>
  );
}

export default ResultNode;