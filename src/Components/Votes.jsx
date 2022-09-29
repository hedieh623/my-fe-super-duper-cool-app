import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


const Votes = ({ setTopicTerm}) => {
  const [votes, setVotes] = useState("");
  const {article_id} = useParams();
  console.log({ article_id })


  useEffect(() => {
    axios
      .get(
        `https://my-fe-super-duper-cool-app.herokuapp.com/api/articles/${article_id}`
      )
      .then(({ data }) => {
        console.log(`data =${JSON.stringify(data)}`);
        console.log(`data.article =${JSON.stringify(data.article)}`);
        setVotes(data.article);
      })
      .catch((err) => {});
  }, [article_id]);
  return (
    <main>
      <Topics />
      <ul>
        {votes.map((vote) => {
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
export default Votes;