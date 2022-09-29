import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Articles from "./Components/Articles";
import Nav from "./Components/Nav";
import Topics from "./Components/Topics";
import Home from "./Components/Home";
import SingleArticle from "./Components/SingleArticle";



function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/articles" element={<Articles />}></Route>
          <Route path="/topics" element={<Topics />}></Route>
          <Route path= "/topics/:articletopic" element={<Articles />}></Route>
          <Route path = "/articles/:article_id" element={<SingleArticle/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
