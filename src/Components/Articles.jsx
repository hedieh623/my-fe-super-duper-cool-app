import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams,Link } from "react-router-dom";
import Topics from "./Topics";







const Articles = ({ setTopicTerm}) => {
  const [articles, setArticles] = useState([]);
  const { articletopic } = useParams();

  useEffect(() => {
    axios
      .get(`https://my-fe-super-duper-cool-app.herokuapp.com/api/articles`,{
    params: {
      topic: articletopic //topic is  a query from the backend 
    }})
      .then(({ data }) => {
        // console.log(`data =${JSON.stringify(data.articles)}`);
        setArticles(data.articles);
      })
      .catch((err) => {});
  }, [articletopic]);
  return (
    <main>
      <Topics />
      <ul>
        {articles.map((article) => {

          return (
            <li key={article.article_id}>
              <Link to={`/articles/${article.article_id}/`}>
                <h2>{article.title}</h2>
              </Link>

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
