import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


const SingleArticle = ({ setTopicTerm}) => {
  const [singlearticle, setsingleArticle] = useState([]);
  const {article_id} = useParams();
  console.log({ article_id });

  useEffect(() => {
    axios
      .get(
        `https://my-fe-super-duper-cool-app.herokuapp.com/api/articles/${article_id}`
      )
      .then(({ data }) => {
        console.log(`data =${JSON.stringify(data)}`);
        console.log(`data.article =${JSON.stringify(data.article)}`);
        setsingleArticle(data.article);
      })
      .catch((err) => {});
  }, [article_id]);
  return (
    <main>
      <h1>{singlearticle.title}</h1>
      <p className="body">{singlearticle.body}</p>
      <p className="votes"> VOTES: {singlearticle.votes}</p>
    </main>
  );
}



export default SingleArticle;
