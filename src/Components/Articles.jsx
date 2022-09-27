import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Topics from "./Topics";






const Articles = ({ setTopicTerm}) => {
  const [articles, setArticles] = useState([]);
  const { articletopic } = useParams();
  console.log(articletopic)

  useEffect(() => {
    axios
      .get(`https://my-fe-super-duper-cool-app.herokuapp.com/api/articles`, {
    params: {
      topic: articletopic //topic is  a query from the backend 
    }})
      .then(({ data }) => {
        console.log(data.articles);
        setArticles(data.articles);
      })
      .catch((err) => {});
  }, [articletopic]);
  return (
    <main>
      <Topics />
      <ul>
        {articles.map((article) => {
          <button type="button">Click Me!</button>;

          return (
            <li key={article.article_id}>
              <h2>{article.title}</h2>
              <p>Created At: {article.created_at}</p>
              <p> Topic: {article.topic}</p> 
              <p>Author: {article.author}</p>
            </li>
          );
        
        })}
      </ul>
    </main>
  );
};



export default Articles;
