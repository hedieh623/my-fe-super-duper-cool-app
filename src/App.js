import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Articles from "./Components/Articles";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Articles />
      </div>
    </BrowserRouter>
  );
}
export default App;
