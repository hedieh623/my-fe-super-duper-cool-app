import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Articles from "./Components/Articles";



function App() {
const [articles, setArticles] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Articles setArticles ={setArticles}/>
        
      </div>
    </BrowserRouter>
  );
}
export default App;
