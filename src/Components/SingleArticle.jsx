import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const SingleArticle = ({ setTopicTerm}) => {
  const [singlearticle, setsingleArticle] = useState([]);
  const { singlearticleparam } = useParams();
  console.log(singlearticleparam);

useEffect(() => {
    axios
      .get(`https://my-fe-super-duper-cool-app.herokuapp.com/api/articles/1`
      .then(({ data }) => {
        console.log(data.singlearticle);
        setsingleArticle(data.singlearticle);
      })
      .catch((err) => {}));
  }, [])};
   return (
    <main>
      <Articles />
      <ul>
        {SingleArticle.map((article) => {
          <button type="button">Click Me!</button>;

          return (
            <li key={article.article_id}>
              <h2>{article.title}</h2>
              <p>Created At: {article.body}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
;



export default SingleArticles;
