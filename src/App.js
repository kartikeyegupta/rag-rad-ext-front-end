import logo from './logo.svg';
import Papa from 'papaparse';
import { useState } from 'react'
import './App.css';

function App() {
  
  //text input const
  const[val, setVal] = useState("desired value")
  const click = () => {
    alert(val)
  }
  const change = event => {
    setVal(event.target.value)
  }

  // csv parsing 
  const[data, setData] = useState([]);
  const [columnArray, setColumn] = useState([]);
  const [values, setValues] = useState([]);

  // handles csv files
  const handleFile = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function(result) {
        const columnArray = [];
        const valuesArray = [];

        result.data.map((d) => {
          columnArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });
        setData(result.data);
        setColumn(columnArray[0]);
        setValues(valuesArray);
      }
    })
  }

  return (
    <div>

      {/* input to backend */}
      <input onChange = {change}
      value = {val}/>
      <button onClick = {click}> Click me </button>

      {/* csv input */}
      <input
        type = "file"
        name = 'file'
        accept = '.csv'
        onChange={handleFile}
        style={{display:"block", margin: "10px auto"}}
      ></input>

      <br/>

      {/* test output for csv */}
      <table style={{borderCollapse: "collapse", border: "1 px solid black", margin: "5 px auto"}}>
        <thead>
            <tr>
                {columnArray.map((col, i) => (
                  <th key = {i}>{col}</th>
                ))}
            </tr>
        </thead>
        <tbody>
                {values.map((v, i)=>
                  <tr key={i}>
                    {v.map((value, i) => (
                        <td key = {i}>{value}</td>
                    ))}
                  </tr>
                )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
