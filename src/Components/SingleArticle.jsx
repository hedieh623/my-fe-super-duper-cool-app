import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Votes from "./Votes";
import Comments from "./Comments";
import CommentAdder from "./Commentadder";
// import React from "react";


const SingleArticle = () => {
  const [singlearticle, setsingleArticle] = useState([]);
  const {article_id} = useParams();

  useEffect(() => {
    axios
      .get(
        `https://my-fe-super-duper-cool-app.herokuapp.com/api/articles/${article_id}`
      )
      .then(({ data }) => {
        setsingleArticle(data.article);
      })
      .catch((err) => {});
  }, [article_id]);
  return (
    <main>
      <h1>{singlearticle.title}</h1>
      <p className="body">{singlearticle.body}</p>
      <Votes articleID={article_id} votes={singlearticle.votes} />
      <Comments articleID={article_id} comments={singlearticle.comments} />
    </main>
  );
}

// const articleCard = ({article}) =>{
//   const [optimisticVote, setOptimisticVote] = useState
//   const handleClick =()=>{

//   }

//   return(
//     <li className= "Games__card">
//       <h2>{article.article_title}</h2>
//       <p>Votes: {article.votes}</p>
//     </li>
//   )
// };

export default SingleArticle;
