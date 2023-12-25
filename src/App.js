import axios from "axios";
import { react, useState } from "react";
import './style.css'
function App() {
  const [state, setState] = useState([]);
  return (
    <div>
      <h1>Axios Testing </h1>
      <button
        onClick={() => {
          axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
              console.log(response.data);
              setState(response.data);
            });
        }}
      >
        Click
      </button>
      {state.map((obj,index) => {
        return (
          <div className="d-flex w-100 t-l">
            <h4 className="w/3 p-20 t-l">{index+1}</h4>
            <h4 className="w/3 p-20 t-l">{obj.title}</h4>
            <p className="w/3 p-20 t-l">{obj.body}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
