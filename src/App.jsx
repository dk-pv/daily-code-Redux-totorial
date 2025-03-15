import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
function App() {
  const [count , setCount] = useState(5)
  const [color , setColor] = useState('red')

  return (
    <div className="App">
      <Header count={count} color={color} />
      <Main count={count} setCount={setCount}  color={color} setColor={setColor}/>
      <Footer  color={color} />
    </div>
  );
}

export default App;
 