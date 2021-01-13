import { useState } from "react";
import { usePasswordValidation } from "./hooks/usePasswordValidation";

function App() {  

const [password, setPassword] = useState({
      firstPassword: "",
      secondPassword: "",
     });
  
const [
    validLength,
    hasNumber,
    upperCase,
    lowerCase,
    match,
    specialChar,
] = usePasswordValidation({
firstPassword: password.firstPassword,
secondPassword: password.secondPassword,
});


const setFirst = (event) => {
  setPassword({ ...password, firstPassword: event.target.value });
};
const setSecond = (event) => {
  setPassword({ ...password, secondPassword: event.target.value });
};
return (
<div className='App'>
  <div>
    First Password:
    <input onChange={setFirst} type='text' />
  </div>
  <div>
    Second Password:
    <input onChange={setSecond} type='text' />
  </div>
  <div>
    <ul>
      <li>
        Valid Length: {validLength ? <span>True</span> : <span>False</span>}
      </li>
      <li>
        Has a Number: {hasNumber ? <span>True</span> : <span>False</span>}
      </li>
      <li>
        UpperCase: {upperCase ? <span>True</span> : <span>False</span>}
      </li>
      <li>
        LowerCase: {lowerCase ? <span>True</span> : <span>False</span>}
      </li>
      <li>Match: {match ? <span>True</span> : <span>False</span>}</li>
      <li>
        Special Character:{" "}
        {specialChar ? <span>True</span> : <span>False</span>}
      </li>
  </ul>
  </div>
  </div>
  );
}
export default App;