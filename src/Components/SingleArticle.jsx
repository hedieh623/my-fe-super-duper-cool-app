import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


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
      <ul>
        <li>
            <Link to={"/articles/1"}></Link>
        </li>
        {SingleArticle.map((article) => {
          return (
            <li key={article.article_id}>
              <Link to={`/articles/${article.body}`}> {article.body} </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
;



export default SingleArticles;
