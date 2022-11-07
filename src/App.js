import logo from './logo.svg';
import './App.css';
import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//     </div>
//   );
// }

class App extends React.Component{
  render(){
    let sub = "Software Engineering";

    let frstName = "Usman"
    let lstName = "Rahim";

    let arr = [1,2,3,4,5]
    return(
      <div>
        <h1>Hello, I am Usman Rahim</h1>
        <p>I am a Software Engineer</p>
        <br></br>
        {/* template literals or react likhny mn dono mn curly brackets lagatay pr dollar nahi */}
        <p>
          I am doing {sub} from KU.
          {`my Name is ${frstName} ${lstName}`}
        </p>
        <h4>{arr}</h4>
      </div>      
    )
  }
}

export default App;
