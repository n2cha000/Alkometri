
import './App.css';
import { useState } from 'react';

function MyButton(props) {
  return (
    <button onClick={props.onClick} >Calculate</button>
  );
}

function Weight(props) {

  return (
    <>
    <label for="Weight">Weight:</label>
    <input type="number" value ={props.value} onChange={props.onChange} name="Weight"></input>
    </>
  );
}

function Bottles(props) {
 
  return(
  <>
    <label for="Bottles">Bottles:</label>
    <input type="number" value ={props.value} onChange={props.onChange} name="Bottles"></input>    
  </>     
  );

} 

function Time(props) {

return(
  <>
  <label for="Time">Time:</label>
  <input type="number" value ={props.value} onChange={props.onChange} name="Time"></input> 
  </>
     

);
}

function App() {
  const [weight, setWeight] = useState('');
  const [time, setTime] = useState('');
  const [selectedGender, setSelectedGender] = useState('Male');
  const [bottles, setBottles] = useState('');
  const [result, setResult] = useState('');

  const calculate = (event) => {

    event.preventDefault(); //antaa developerin luoda oman function    
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    
    const grams_left = grams - (burning * time);
    if(selectedGender === "Male"){
      let result_Male = grams_left /(weight * 0.7);
      if(result_Male < 0) result_Male = 0;
      setResult(result_Male.toFixed(2));
    }
    else{ 
      let result_Female = grams_left /(weight* 0.6);
      if(result_Female < 0) result_Female = 0;
      setResult(result_Female.toFixed(2));
    }
  }

  function handleChange(event) {
    setSelectedGender(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <form onSubmit={calculate}>
         <h2>Calculating alcohol blood level</h2>
         <Weight value ={weight} onChange={(e) => setWeight(e.target.value)}/>
         <br/>
         <Bottles value ={bottles} onChange={(e) => setBottles(e.target.value)}/>
         <br/>
         <Time value ={time} onChange={(e) => setTime(e.target.value)}/>
          <br/>
          <div>
            <label for="Gender">Gender</label>
            <label>
                  <input type="radio" value="Male" onChange={handleChange} name="Gender" />
                  Male
              </label>
              <label>
                  <input type="radio" value="Female"  onChange={handleChange} name="Gender"/>
                  Female
                </label>
          </div>
          <output>{result}</output>
          <br/>
         <MyButton type="submit" onClick={calculate}/>
         </form>
        </p>
       
      </header>
    </div>
  );
}

export default App;
