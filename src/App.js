import React from "react";
import Records from './records.json'
function App() {
  return (
    <div className="App">
      

      {
        Records.map( record => {
          return(
            
            <div className="box">
             <table border={ 1 }><tr><td>
              { record.name }</td>
             <td> { record.mark }</td></tr>
            </table>
            </div>
          )
        } )
      }
    </div>
  );
}

export default App;
