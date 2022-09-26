import logo from './logo.svg';
import './App.css';
import axios from "axios"
import Header from "./Components/Header"
import Topics from "./Components/Topics"
import Articles from "./Components/Articles";
import Articleid from "./Components/ArticlesID"
import Comments from "./Components/Comments"
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useEffect } from 'react';




function App() {
  const [articles, setArticles] = { useState };
  return (
    <div className="App">
      <Header />
      <Articles setArticles={setArticles} />
      <Routes>
        <Route path="/" element={<Topics articles={articles} />}></Route>
        <Route path="/:article_topic" element={<Topics />}></Route>
      </Routes>
    </div>
  );
}

export default App;
