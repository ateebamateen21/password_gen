import { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(4);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeCharacters, setIncludeCharacters] = useState(false);

  const generatePassword = useCallback(() => {
    let password = "";
    let string = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
                  "u", "v", "w", "x", "y", "z"]
    const numbers = [0,1,2,3,4,5,6,7,8,9];
    const characters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

    if (includeNumbers) {
      string = [...string, ...numbers]
    }
    if (includeCharacters) {
      string = [...string, ...characters]
    }
    console.log(string);

    for (let i = 1; i <= passwordLength; i++) {
      const index = string[Math.floor(Math.random() * string.length)];
      password += index;
      password.toString();
    }
    setPassword(password);
  }, [includeNumbers, includeCharacters, passwordLength, setPassword]);
  return (
    <>
      <h1>Password Generator</h1>
      <div>
        <input
          type="text"
          placeholder="generate your password"
          value={password}
        />
        <button onClick={generatePassword}>Generate </button>
      </div>
      <div>
        <label htmlFor="passRange">{password}</label>
        <input
          type="range"
          min={4}
          max={10}
          value={passwordLength}
          onChange={(e) => setPasswordLength(e.target.value)}
        />
        <br />
        <label htmlFor="passNumbers">Numbers</label>
        <input
          type="checkbox"
          value={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
          // onChange={setIncludeNumbers((prev)=> !prev)}
        />
        <br />
        <label htmlFor="passChars">Characters</label>
        <input
          type="checkbox"
          value={includeCharacters}
          onChange={(e) => setIncludeCharacters(e.target.checked)}
          // onChange={setIncludeCharacters((prev)=> !prev)}
        />
        <br />
      </div>
    </>
  );
}

export default App;
