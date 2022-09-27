import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const Articles = () => {
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    axios
      .get(`https://my-fe-super-duper-cool-app.herokuapp.com/api/articles`)
      .then(({ data }) => {
        console.log(data.articles);
        setArticles(data.articles);
      })
      .catch((err) => {});
  }, []);
  return (
    <main>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              {article.title},{article.created_at},{article.author}
            </li>
          );
        })}
      </ul>
    </main>
    

  );

  
  







  
};
export default Articles;
